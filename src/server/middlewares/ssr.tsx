import path from 'path';
import React from 'react';
import CleanCSS from 'clean-css';
import { StaticRouter } from 'react-router-dom';
import { Request, Response } from 'express';
import { ChunkExtractor } from '@loadable/server';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import serialize from 'serialize-javascript';
import { theme } from '../../theme/theme';
import Router from '../../router';
import { renderToString } from 'react-dom/server';
import { loadInitialData } from '../utils/loadInitialData';

/**
 * SSR Middleware
 */
export async function ssr(req: Request, res: Response): Promise<void> {
  const webStats = path.resolve(__dirname, '../client/loadable-stats.json');
  const webExtractor = new ChunkExtractor({ statsFile: webStats });
  const sheets = new ServerStyleSheets();
  const state = serialize({
    // device: getDeviceType(),
  });

  try {
    await loadInitialData(req, res);

    // const data = await loadInitialData(req, res);
    // console.log(data[1]);
  } catch (e) {
    console.error(e);
  }

  const html = renderToString(
    webExtractor.collectChunks(
      sheets.collect(
        <ThemeProvider theme={theme}>
          <StaticRouter location={req.url}>
            <Router />
          </StaticRouter>
        </ThemeProvider>,
      ),
    ),
  );

  const links = webExtractor.getLinkTags();
  const scripts = webExtractor.getScriptTags();
  const styleTags = webExtractor.getStyleTags();

  const minCss = new CleanCSS({}).minify(sheets.toString());
  const styles = `<style id="jss-server-side">${minCss.styles}</style>`;
  // const devServer = `${
  //   __DEV__ ? renderToStaticMarkup(<script src="./dev-server.js" />) : ''
  // }`;

  res.render('index', {
    lang: 'ru',
    links,
    styleTags,
    styles,
    html,
    scripts,
    state,
    devServer: '',
  });
}
