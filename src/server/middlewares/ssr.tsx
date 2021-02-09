import path from 'path';
import React from 'react';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import { loadInitialData } from '../utils/loadInitialData';
import { getDataFromTree } from '@apollo/client/react/ssr';
import { ChunkExtractor } from '@loadable/server';
import { StaticRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { rootStore } from '@store/registration';
import { ApolloProvider } from '@apollo/client';
import { dehydrateState } from '@store/utils';
import { apolloClient } from '@libs/apollo';
import { Request, Response } from 'express';
import { theme } from '../../theme/theme';
import { Helmet } from 'react-helmet';
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
  const helmet = Helmet.renderStatic();

  try {
    await loadInitialData(req, res);
  } catch (e) {
    logger.error(e);
  }

  const app = sheets.collect(
    <ApolloProvider client={apolloClient}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <StaticRouter location={req.url}>
            <Router />
          </StaticRouter>
        </ThemeProvider>
      </I18nextProvider>
    </ApolloProvider>,
  );

  const jsx = extractor.collectChunks(app);
  const html = await getDataFromTree(jsx);
  const minCss = new CleanCSS({}).minify(sheets.toString());
  const styles = `<style id="jss-server-side">${minCss.styles}</style>`;

  res.render('index', {
    lang: 'ru',
    helmetTitle: helmet.title.toString(),
    helmetMeta: helmet.meta.toString(),
    helmetLink: helmet.link.toString(),
    helmetScript: helmet.script.toString(),
    helmetBodyAttr: helmet.bodyAttributes.toString(),
    links: extractor.getLinkTags(),
    styleTags: extractor.getStyleTags(),
    styles,
    html,
    storeState: dehydrateState(rootStore),
    apolloState: dehydrateState(apolloClient.extract()),
    scripts: extractor.getScriptTags(),
  });
}
