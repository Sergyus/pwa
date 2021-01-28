import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { ChunkExtractor } from '@loadable/server';
import chalk from 'chalk';
import { Request, Response, NextFunction } from 'express';
import { config } from '@router/config';
import renderHtml from './renderHtml';

export default async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const statsFile = path.resolve(process.cwd(), 'public/loadable-stats.json');
    const extractor = new ChunkExtractor({ statsFile });

    const staticContext: Record<string, any> = {};

    const App = extractor.collectChunks(
      <StaticRouter location={req.path} context={staticContext}>
        {renderRoutes(config as RouteConfig[])}
      </StaticRouter>,
    );

    const htmlContent = renderToString(App);

    // Check if the render result contains a redirect, if so we need to set
    // the specific status and redirect header and end the response
    if (staticContext.url) {
      res.status(301).setHeader('Location', staticContext.url);
      res.end();

      return;
    }

    // Check page status
    const status = staticContext.status === '404' ? 404 : 200;

    // Pass the route and initial state into html template
    res.status(status).send(renderHtml(extractor, htmlContent));
  } catch (error) {
    res.status(404).send('Not Found :(');

    console.error(chalk.red(`==> 😭  Rendering routes error: ${error}`));
  }

  next();
};
