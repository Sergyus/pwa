import { Express } from 'express';
import chalk from 'chalk';

/**
 * Dev Server
 */
export const devServer = (app: Express): void => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const webpack = require('webpack');
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const webpackConfig = require('../../tools/webpack/config.babel');
  const compiler = webpack(webpackConfig);
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const instance = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: 'minimal',
    serverSideRender: true,
    watchOptions: { ignored: /node_modules/ },
  });

  app.use(instance);

  instance.waitUntilValid(() => {
    const url = `http://localhost:3000`;
    console.info(chalk.green(`==> 🌎  Listening at ${url}`));
  });

  app.use(
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('webpack-hot-middleware')(compiler, {
      log: false,
      path: '/__webpack_hmr',
      heartbeat: 10 * 1000,
    }),
  );
};
