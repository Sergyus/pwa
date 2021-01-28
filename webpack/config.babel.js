import path from 'path';
import webpack from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import TerserJSPlugin from 'terser-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import LoadablePlugin from '@loadable/webpack-plugin';
import FriendlyErrorsWebpackPlugin from '@soda/friendly-errors-webpack-plugin';
const nodeExternals = require('webpack-node-externals');

const isDev = process.env.NODE_ENV !== 'production';

// Loaders for CSS and SASS
const getStyleLoaders = (sass = false) =>
  [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        importLoaders: sass ? 2 : 1,
        modules: {
          auto: true,
          localIdentName: isDev ? '[name]__[local]' : '[contenthash:base64:5]',
          localIdentContext: path.resolve(process.cwd(), 'src'),
        },
      },
    },
    { loader: 'postcss-loader', options: { sourceMap: isDev } },
    sass && { loader: 'sass-loader', options: { sourceMap: isDev } },
  ].filter(Boolean);

/********************************************
 * WEBPACK
 *******************************************/
const getConfig = (target) => ({
  name: target,
  target,
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'eval-source-map' : false,
  stats: 'minimal',
  context: path.resolve(process.cwd()),
  entry: [
    `./src/client/main-${target}.js`,
    isDev && target === 'web' && 'webpack-hot-middleware/client?reload=true',
  ].filter(Boolean),
  output: {
    path: path.resolve(process.cwd(), `public/assets/${target}`),
    filename: isDev ? '[name].js' : '[name].[contenthash:8].js',
    chunkFilename: isDev ? '[id].js' : '[id].[contenthash:8].js',
    publicPath: `/assets/${target}/`,
    libraryTarget: target === 'node' ? 'commonjs2' : undefined,
    pathinfo: isDev,
  },
  externals: target === 'node' ? [nodeExternals()] : undefined,
  resolve: {
    modules: ['src', 'node_modules'],
    descriptionFiles: ['package.json'],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.json'],
    alias: {
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@modules': path.resolve(__dirname, '../src/modules'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@router': path.resolve(__dirname, '../src/router'),
      '@libs': path.resolve(__dirname, '../src/libs'),
    },
  },
  optimization: {
    runtimeChunk: target !== 'node',
    minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin()],
    splitChunks: {
      chunks: isDev ? 'async' : 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { cacheDirectory: isDev },
      },
      // All output '.js' files will have any sourcemaps re-processed by source-map-loader.
      // So you can debug your output code as if it was TypeScript.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.css$/,
        use: getStyleLoaders(),
      },
      {
        test: /\.(scss|sass)$/,
        use: getStyleLoaders(true),
      },
      {
        test: /\.(woff2?|ttf|otf|eot)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(gif|png|jpe?g|webp|svg|html)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // limit: 10 * 1024,
              generator: (content, mimetype, encoding, resourcePath) => {
                if (/\.html$/i.test(resourcePath)) {
                  return `data:${mimetype},${content.toString()}`;
                }

                return `data:${mimetype}${
                  encoding ? `;${encoding}` : ''
                },${content.toString(encoding)}`;
              },
              //    name: '[name].[contenthash:8].[ext]',
              // esModule: false,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: { disable: true },
          },
        ],
      },
    ],
  },
  plugins: [
    new WebpackManifestPlugin({
      fileName: path.resolve(process.cwd(), 'public/webpack-assets.json'),
      filter: (file) => file.isInitial,
    }),
    new FriendlyErrorsWebpackPlugin(),
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new LoadablePlugin({
      //   writeToDisk: true,
      // filename: '../loadable-stats.json',
    }),
    new MiniCssExtractPlugin({
      // Don't use hash in development, we need the persistent for "renderHtml.ts"
      filename: isDev ? '[name].css' : '[name].[contenthash:8].css',
      chunkFilename: isDev ? '[id].css' : '[id].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEV__: isDev,
      __PROD__: !isDev,
    }),
    isDev && new webpack.HotModuleReplacementPlugin(),
    isDev &&
      new ReactRefreshWebpackPlugin({ overlay: { sockIntegration: 'whm' } }),
    isDev && new ForkTsCheckerWebpackPlugin(),
    !isDev && new webpack.HashedModuleIdsPlugin(),
    !isDev &&
      new CompressionPlugin({
        test: /\.(js|css|html)$/,
        threshold: 10240,
      }),
    // Visualize all of the webpack bundles
    // Check "https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-plugin" for more configurations
    !isDev &&
      new BundleAnalyzerPlugin({
        analyzerMode:
          process.env.NODE_ENV === 'analyze' ? 'server' : 'disabled',
      }),
  ].filter(Boolean),
});

module.exports = [getConfig('web'), getConfig('node')];
