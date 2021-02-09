import path from 'path';
import React from 'react';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import { loadInitialData } from '../utils/loadInitialData';
import { ChunkExtractor } from '@loadable/server';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Request, Response } from 'express';
import { theme } from '../../theme/theme';
import CleanCSS from 'clean-css';
import Router from '@router/Router';
import { CONFIG } from '@modules/Api/consts';
import { I18nextProvider } from 'react-i18next';
import { rootStore } from '@store/registration';
import { dehydrateStore } from '@store/utils';
import { logger } from '../shared';
import i18n from 'i18next';
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';

/**
 * SSR Middleware
 */
export async function ssr(req: Request, res: Response): Promise<void> {
  const statsFile = path.resolve(process.cwd(), 'public/loadable-stats.json');
  const webExtractor = new ChunkExtractor({ statsFile });
  const sheets = new ServerStyleSheets();
  // const state = serialize({
  //   // device: getDeviceType(),
  // });

  const client = new ApolloClient({
    link: createHttpLink({
      uri: CONFIG.url,
      credentials: 'same-origin',
      headers: {
        cookie: req.header('Cookie'),
      },
    }),
    cache: new InMemoryCache(),
    ssrMode: true,
  });

  try {
    await loadInitialData(req, res);
  } catch (e) {
    logger.error(e);
  }

  const html = renderToString(
    webExtractor.collectChunks(
      sheets.collect(
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <I18nextProvider i18n={i18n}>
              <StaticRouter location={req.url}>
                <Router />
              </StaticRouter>
            </I18nextProvider>
          </ThemeProvider>
        </ApolloProvider>,
      ),
    ),
  );

  const links = webExtractor.getLinkTags();
  const scripts = webExtractor.getScriptTags();
  const styleTags = webExtractor.getStyleTags();

  const minCss = new CleanCSS({}).minify(sheets.toString());
  const styles = `<style id="jss-server-side">${minCss.styles}</style>`;

  res.render('index', {
    lang: 'ru',
    links,
    styleTags,
    styles,
    html,
    state: dehydrateStore(rootStore),
    scripts,
  });
}
