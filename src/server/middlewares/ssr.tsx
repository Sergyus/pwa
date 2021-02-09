import path from 'path';
import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import { loadInitialData } from '../utils/loadInitialData';
import { getDataFromTree } from '@apollo/client/react/ssr';
import { ChunkExtractor } from '@loadable/server';
import { StaticRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { rootStore } from '@store/registration';
import { dehydrateState } from '@store/utils';
import { Request, Response } from 'express';
import { theme } from '../../theme/theme';
import Router from '@router/Router';
import { logger } from '../shared';
import CleanCSS from 'clean-css';
import i18n from 'i18next';

/**
 * SSR Middleware
 */
export async function ssr(req: Request, res: Response): Promise<void> {
  const statsFile = path.resolve(process.cwd(), 'public/loadable-stats.json');
  const extractor = new ChunkExtractor({ statsFile });
  const sheets = new ServerStyleSheets();
  const client = new ApolloClient({
    ssrMode: true,
    uri: 'https://api.graphqlplaceholder.com',
    // link: createHttpLink({
    //   fetch,
    // }),
    cache: new InMemoryCache(),
  });

  try {
    await loadInitialData(req, res);
  } catch (e) {
    logger.error(e);
  }

  const components = sheets.collect(
    <ApolloProvider client={client}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <StaticRouter location={req.url}>
            <Router />
          </StaticRouter>
        </ThemeProvider>
      </I18nextProvider>
    </ApolloProvider>,
  );

  const jsx = extractor.collectChunks(components);
  const html = await getDataFromTree(jsx);

  console.log(dehydrateState(client.extract()));

  const minCss = new CleanCSS({}).minify(sheets.toString());
  const styles = `<style id="jss-server-side">${minCss.styles}</style>`;

  res.render('index', {
    lang: 'ru',
    links: extractor.getLinkTags(),
    styleTags: extractor.getStyleTags(),
    styles,
    html,
    state: dehydrateState(rootStore),
    apolloState: dehydrateState(client.extract()),
    scripts: extractor.getScriptTags(),
  });
}
