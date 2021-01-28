import { Express } from 'express';
import chalk from 'chalk';

/**
 * Dev Server
 */
export const devServer = (app: Express): void => {
  const webpack = require('webpack');
  const webpackConfig = require('../../../webpack/config.babel');
  const compiler = webpack(webpackConfig);

  const instance = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig[0].output.publicPath, // '/assets/web',
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: 'minimal',
    serverSideRender: true,
    writeToDisk(filePath: string) {
      return /assets\/node\//.test(filePath) || /loadable-stats/.test(filePath);
    },
  });

  app.use(instance);

  instance.waitUntilValid(() => {
    const url = `http://localhost:3000`;
    console.info(chalk.green(`==> 🌎  Listening at ${url}`));
  });

  app.use(
    require('webpack-hot-middleware')(compiler, {
      log: false,
      path: '/__webpack_hmr',
      heartbeat: 10 * 1000,
    }),
  );
};
