const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const webpackConfig = require('./webpack.base');
const TerserJSPlugin = require('terser-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');
// const LoadablePlugin = require('@loadable/webpack-plugin');
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = (env, { mode }) => {
  const isProd = mode === 'production';
  const config = webpackConfig(mode);

  return {
    mode,
    context: __dirname,
    target: 'node',
    stats: 'minimal',
    entry: {
      main: path.join(__dirname, '../src/server/', 'server.ts'),
    },
    output: {
      path: path.join(__dirname, '../build/server'),
      filename: '[name].js',
      libraryTarget: 'commonjs2',
      publicPath: '/',
    },
    module: {
      rules: [
        config.modules.js('node'),
        config.modules.scssNode,
        config.modules.images,
      ],
    },
    devServer: {
      hot: true,
      open: true,
    },
    plugins: [
      // new LoadablePlugin(),
      // new TsconfigPathsPlugin({
      //   extensions: ['.ts', '.tsx'],
      // }),
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(),
      new NodemonPlugin(),
      new webpack.DefinePlugin({
        __CLIENT__: false,
        __SERVER__: true,
        __DEV__: !isProd,
        __PROD__: isProd,
      }),
      config.FriendlyErrorsWebpackPlugin,
    ],
    performance: {
      hints: false,
      maxEntrypointSize: isProd ? 512000 : undefined,
      maxAssetSize: isProd ? 512000 : undefined,
    },
    resolve: config.resolve,
    externals: ['@loadable/component', nodeExternals()],
    optimization: {
      minimize: isProd,
      minimizer: [isProd ? new TerserJSPlugin({}) : () => {}],
    },
  };
};
