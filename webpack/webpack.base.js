const path = require('path');
const autoprefixer = require('autoprefixer');
const _MiniCssExtractPlugin = require('mini-css-extract-plugin');
const _ESLintPlugin = require('eslint-webpack-plugin');
const _HtmlWebpackPlugin = require('html-webpack-plugin');
const _ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const _FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin');

module.exports = (mode) => {
  const isProd = mode === 'production';
  const isDev = !isProd;

  const modules = {
    js: (target) => ({
      test: /\.([jt])sx?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            caller: { target },
          },
        },
        'eslint-loader',
      ],
    }),
    scssNode: {
      test: /\.(scss|css)$/,
      exclude: /node_modules/,
      use: ['css-loader', 'sass-loader'],
    },
    scss: {
      test: /\.(scss|css)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: _MiniCssExtractPlugin.loader,
          options: {
            //  esModule: false,
          },
        },
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              config: path.resolve(__dirname, '../postcss.config.js'),
              plugins: [autoprefixer],
            },
            sourceMap: isDev,
          },
        },
        'sass-loader',
      ],
    },
    html: {
      test: /\.(html)$/,
      use: {
        loader: 'html-loader',
      },
    },
    images: {
      test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
      type: 'asset/resource',
    },
    fonts: {
      test: /\.(woff(2)?|eot|ttf|otf|)$/,
      type: 'asset/inline',
    },
  };

  const resolve = {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.css', '.scss'],
    alias: {
      modules: path.resolve(__dirname, '../src/modules'),
    },
  };

  const ESLintPlugin = new _ESLintPlugin({
    overrideConfigFile: path.resolve(__dirname, '../.eslintrc.js'),
    context: path.join(__dirname, '../src'),
    extensions: ['js', 'jsx', 'ts', 'tsx', '.json'],
  });

  const HtmlWebpackPlugin = new _HtmlWebpackPlugin({
    inject: true,
    filename: 'index.html',
    favicon: '../public/favicon.ico',
    template: '../public/index.html',
  });

  const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
    filename: isDev ? '[name].css' : '[name].[contenthash].css',
    chunkFilename: isDev ? '[id].css' : '[id].[contenthash].css',
  });

  const ForkTsCheckerWebpackPlugin = new _ForkTsCheckerWebpackPlugin({
    async: true,
    typescript: {
      configFile: path.join(__dirname, '../tsconfig.json'),
      diagnosticOptions: {
        semantic: true,
        syntactic: true,
      },
      mode: 'write-references',
    },
    eslint: { enabled: true, files: '../src/**/*.{ts,tsx,js,jsx}' },
    logger: { infrastructure: 'silent', issues: 'console' },
  });

  const FriendlyErrorsWebpackPlugin = new _FriendlyErrorsWebpackPlugin();

  const devtool = isProd ? false : 'source-map';

  return {
    modules,
    resolve,
    devtool,
    ESLintPlugin,
    HtmlWebpackPlugin,
    MiniCssExtractPlugin,
    FriendlyErrorsWebpackPlugin,
    ForkTsCheckerWebpackPlugin,
  };
};
