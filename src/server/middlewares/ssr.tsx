import path from 'path';
import React from 'react';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
// import { loadInitialData } from '../utils/loadInitialData';
import { ChunkExtractor } from '@loadable/server';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import serialize from 'serialize-javascript';
import { Request, Response } from 'express';
import { theme } from '../../theme/theme';
import CleanCSS from 'clean-css';
import Router from '@router/Router';

/**
 * SSR Middleware
 */
export async function ssr(req: Request, res: Response): Promise<void> {
  // const nodeStats = path.resolve(
  //   process.cwd(),
  //   'public/assets/node/loadable-stats.json',
  // );
  const statsFile = path.resolve(process.cwd(), 'public/loadable-stats.json');

  // const nodeExtractor = new ChunkExtractor({ statsFile: nodeStats });
  // const { default: App } = nodeExtractor.requireEntrypoint();

  const webExtractor = new ChunkExtractor({ statsFile });
  const sheets = new ServerStyleSheets();
  const state = serialize({
    // device: getDeviceType(),
  });

  // try {
  //   await loadInitialData(req, res);
  //
  //   // const data = await loadInitialData(req, res);
  //   // console.log(data[1]);
  // } catch (e) {
  //   console.error(e);
  // }

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

  res.render('index', {
    lang: 'ru',
    links,
    styleTags,
    styles,
    html,
    state,
    scripts,
  });
}
