const path = require('path');
const webpack = require('webpack');
const LoadablePlugin = require('@loadable/webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const webpackConfig = require('./webpack.base');
// const { WebpackPluginServe } = require('webpack-plugin-serve');

module.exports = (env, { mode, liveReload }) => {
  const watchMode = liveReload || false;
  const isProd = mode === 'production';
  const config = webpackConfig(mode);

  return {
    context: __dirname,
    target: 'web',
    stats: { modules: false },
    watch: true,
    watchOptions: {
      ignored: /node_modules/,
    },
    entry: {
      main: [
        path.join(__dirname, '../src/index.tsx'),
        // 'webpack-plugin-serve/client',
      ],
    },
    output: {
      path: path.join(__dirname, '../build/client'),
      filename: !isProd ? '[name].js' : '[name].[contenthash].js',
      publicPath: './',
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
        __DEV__: !isProd,
        __PROD__: isProd,
      }),
      config.ESLintPlugin,
      config.MiniCssExtractPlugin,
      config.FriendlyErrorsWebpackPlugin,
      config.ForkTsCheckerWebpackPlugin,
    ],
    devtool: config.devtool,
    resolve: config.resolve,
    optimization: {
      runtimeChunk: true,
      minimize: isProd,
      minimizer: [isProd ? new TerserJSPlugin({}) : () => {}],
    },
    performance: {
      hints: false,
    },
  };
};
