import path from 'path';
import { join } from 'path';
import ESLintPlugin from 'eslint-webpack-plugin';
import webpack from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const config: webpack.Configuration & { devServer: {} } = {
  context: __dirname,
  target: 'web',
  mode: 'development',
  entry: {
    main: [
      join(__dirname, '../src/Loading.tsx'),
      join(__dirname, './utils/cleanConsoleOnHMR.ts'),
    ],
  },
  output: {
    path: join(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].[fullhash].js',
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    publicPath: '/',
    port: 4200,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    hot: true,
    overlay: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                config: join(__dirname, '../postcss.config.js'),
                plugins: [autoprefixer],
              },
              sourceMap: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset/inline',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      modules: path.join(__dirname, '../src/modules'),
    },
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      __isBrowser__: true,
    }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      favicon: '../public/favicon.ico',
      template: '../public/index.html',
    }),
    new ForkTsCheckerWebpackPlugin({
      async: true,
      typescript: {
        configFile: join(__dirname, '../tsconfig.json'),
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: 'write-references',
      },
      eslint: { enabled: true, files: '../src/**/*.{ts,tsx,js,jsx}' },
      logger: { infrastructure: 'silent', issues: 'console' },
    }),
    new ESLintPlugin({
      context: join(__dirname, '../src'),
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
  ],
  optimization: {
    runtimeChunk: {
      name: 'runtime',
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
        },
      },
    },
  },
};

export default config;
