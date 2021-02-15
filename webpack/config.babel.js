import path from 'path';
import webpack from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import TerserJSPlugin from 'terser-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import LoadablePlugin from '@loadable/webpack-plugin';
import FriendlyErrorsWebpackPlugin from '@soda/friendly-errors-webpack-plugin';
import { InjectManifest } from 'workbox-webpack-plugin';

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
module.exports = {
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'eval-source-map' : false,
  stats: 'minimal',
  context: path.resolve(process.cwd()),
  entry: [
    isDev && 'webpack-hot-middleware/client?reload=true',
    './src/client',
  ].filter(Boolean),
  output: {
    path: path.resolve(process.cwd(), 'public/assets'),
    publicPath: '/assets/',
    filename: isDev ? '[name].js' : '[name].[contenthash:8].js',
    chunkFilename: isDev ? '[id].js' : '[id].[contenthash:8].js',
    pathinfo: isDev,
  },
  resolve: {
    modules: ['src', 'node_modules'],
    descriptionFiles: ['package.json'],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.json'],
    alias: {
      '@api': path.resolve(__dirname, '../src/api'),
      '@store': path.resolve(__dirname, '../src/store'),
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@modules': path.resolve(__dirname, '../src/modules'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@router': path.resolve(__dirname, '../src/router'),
      '@libs': path.resolve(__dirname, '../src/libs'),
      '@utils': path.resolve(__dirname, '../src/utils'),
    },
  },
  optimization: {
    //  runtimeChunk: true,
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
        exclude: /node_modules/,
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
        test: /\.(gif|png|jpe?g|webp|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              name: 'img/[name].[ext]',
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
    !isDev &&
      new InjectManifest({
        mode: 'development', //'development',
        swSrc: './src/sw/service-worker.ts',
        swDest: '../service-worker.js',
        include: [/\.html$/, /\.js$/, /\.css$/, /\.woff2$/, /\.jpg$/, /\.png$/],
        exclude: [/\.map$/, /manifest$/, /service-worker\.js$/, /sw\.js$/],
      }),
    new WebpackManifestPlugin({
      fileName: path.resolve(process.cwd(), 'public/webpack-assets.json'),
      filter: (file) => file.isInitial,
    }),
    new FriendlyErrorsWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new LoadablePlugin({
      writeToDisk: true,
      filename: '../loadable-stats.json',
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
    !isDev && new webpack.ids.HashedModuleIdsPlugin(),
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
};
