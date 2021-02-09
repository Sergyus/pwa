const path = require('path');

module.exports = {
  target: 'webworker',
  mode: 'development',
  // WARNING: commented out to disable source maps
  //devtool: 'inline-source-map',
  entry: {
    index: path.resolve(__dirname, '../src/sw/service-worker.ts'),
  },
  resolve: { extensions: ['.js', '.ts'] },
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'service-worker.js',
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { cacheDirectory: true },
      },
    ],
  },
  plugins: [],
};
