const path = require('path');
const webpack = require('webpack');
const LoadablePlugin = require('@loadable/webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const webpackConfig = require('./webpack.base');
// const { WebpackPluginServe } = require('webpack-plugin-serve');

module.exports = (env, { mode, liveReload }) => {
  const watchMode = liveReload || false;
  const isDev = mode !== 'production';
  const config = webpackConfig(mode);

  return {
    context: __dirname,
    target: 'web',
    stats: 'minimal',
    watch: true,
    entry: {
      main: [
        path.join(__dirname, '../src/index.tsx'),
        // 'webpack-plugin-serve/client',
      ],
    },
    output: {
      path: path.join(__dirname, '../build/client'),
      filename: isDev ? '[name].js' : '[name].[contenthash].js',
      publicPath: './',
      pathinfo: isDev,
    },
    module: {
      rules: [
        config.modules.js('web'),
        config.modules.scss,
        config.modules.images,
        config.modules.fonts,
      ],
    },
    plugins: [
      // new WebpackPluginServe({
      //   liveReload: true,
      //   historyFallback: true,
      //   port: 3000,
      //   host: 'localhost',
      //   static: [path.join(__dirname, '../build/client')],
      //   client: {
      //     address: `localhost:3000`,
      //   },
      //   waitForBuild: true,
      // }),
      new LoadablePlugin(),
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin({
        __CLIENT__: true,
        __SERVER__: false,
        __DEV__: isDev,
        __PROD__: !isDev,
      }),
      config.ESLintPlugin,
      config.MiniCssExtractPlugin,
      config.FriendlyErrorsWebpackPlugin,
      isDev && config.ForkTsCheckerWebpackPlugin,
    ].filter(Boolean),
    devtool: config.devtool,
    resolve: config.resolve,
    optimization: {
      runtimeChunk: true,
      minimize: !isDev,
      minimizer: [!isDev ? new TerserJSPlugin() : () => {}].filter(Boolean),
      splitChunks: {
        chunks: isDev ? 'async' : 'all',
      },
    },
    performance: {
      hints: false,
    },
  };
};
