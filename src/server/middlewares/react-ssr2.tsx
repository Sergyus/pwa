import React from 'react';
import path from 'path';
import { Request, Response } from 'express';
import { ChunkExtractor } from '@loadable/server';
import { renderToNodeStream } from 'react-dom/server';
import HtmlTemplate from '../template/HtmlTemplate';
import { StaticRouter } from 'react-router';
import { ServerStyleSheets } from '@material-ui/core/styles';
import App from '../../App';

/**
 * React SSR
 * @param req Request
 * @param res Response
 */
export default async function reactSSR2(
  req: Request,
  res: Response,
): Promise<void> {
  // const nodeStats = path.resolve(__dirname, '../server/loadable-stats.json');
  const webStats = path.resolve(__dirname, '../client/loadable-stats.json');

  // const nodeExtractor = new ChunkExtractor({ statsFile: nodeStats });
  const webExtractor = new ChunkExtractor({ statsFile: webStats });

  // const { default: AppTEST } = nodeExtractor.requireEntrypoint();
  // console.info(AppTEST);

  // const ReactApp = webExtractor.collectChunks(<App />);

  const scriptTags = webExtractor.getScriptElements();
  const linkTags = webExtractor.getLinkElements();
  const styleTags = webExtractor.getStyleElements();

  const sheets = new ServerStyleSheets();
  const css = sheets.getStyleElement();

  const app = webExtractor.collectChunks(
    sheets.collect(
      <HtmlTemplate
        links={linkTags}
        styles={styleTags}
        scripts={scriptTags}
        css={css}
      >
        <StaticRouter location={req.url}>
          <App />
        </StaticRouter>
      </HtmlTemplate>,
    ),
  );

  renderToNodeStream(app).pipe(res);
}
