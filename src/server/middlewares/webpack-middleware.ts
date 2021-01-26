// // import middleware, { WebpackDevMiddleware } from 'webpack-dev-middleware';
// // import { WebpackHotMiddleware } from 'webpack-hot-middleware';
// import webpack, { Configuration } from 'webpack';
// import config from '../../../webpack/webpack.server';
//
// /**
//  * Webpack Dev Middleware
//  */
// export const webpackMiddleware = (): WebpackDevMiddleware | null => {
//   // return null;
//   const mode = __DEV__ ? 'development' : 'production';
//   const compiler = webpack(config({}, { mode }) as Configuration);
//   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//   // @ts-ignore
//   config({}, { mode }).entry.app.unshift(
//     'webpack-hot-middleware/client?reload=true&timeout=1000',
//   );
//
//   console.info(111, compiler.outputPath);
//
//   return middleware(compiler, {
//     publicPath: '/',
//     // serverSideRender: true,
//     stats: { colors: true },
//     writeToDisk: true,
//   });
// };
