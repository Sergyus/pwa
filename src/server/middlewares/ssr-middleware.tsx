import path from 'path';
import React from 'react';
import CleanCSS from 'clean-css';
import { StaticRouter } from 'react-router';
import { Request, Response } from 'express';
import { ChunkExtractor } from '@loadable/server';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import { serializeState } from '../utils';
import { serverRender } from '@rockpack/ussr';
import App from '../../App';
import { theme } from '../../theme/theme';
// import { renderToStaticMarkup } from 'react-dom/server';

/**
 * SSR Middleware
 */
export async function ssrMiddleware(
  req: Request,
  res: Response,
): Promise<void> {
  const webStats = path.resolve(__dirname, '../client/loadable-stats.json');
  const webExtractor = new ChunkExtractor({ statsFile: webStats });
  const sheets = new ServerStyleSheets();
  const state = serializeState({
    // device: getDeviceType(),
  });

  const { html } = await serverRender(() =>
    webExtractor.collectChunks(
      sheets.collect(
        <ThemeProvider theme={theme}>
          <StaticRouter basename="pwa" location={req.url}>
            <App />
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
    lang: 'en',
    links,
    styleTags,
    styles,
    html,
    scripts,
    state,
    devServer: '',
  });
}
