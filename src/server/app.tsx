import path from 'path';
import express from 'express';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import { ssrMiddleware } from './middlewares';
import indexRouters from './routes';
import compression from 'compression';
import favicon from 'serve-favicon';

const app = express();

// if (__DEV__) {
//   // eslint-disable-next-line @typescript-eslint/no-var-requires
//   const webpack = require('webpack');
//   // eslint-disable-next-line @typescript-eslint/no-var-requires
//   const webpackConfig = require('../../webpack/webpack.client');
//   const compiler = webpack(webpackConfig({}, { mode: 'development' }));
//
//   app.use(
//     // eslint-disable-next-line @typescript-eslint/no-var-requires
//     require('webpack-dev-middleware')(compiler, {
//       serverSideRender: true,
//       index: false,
//     }),
//   );
//   app.use(
//     // eslint-disable-next-line @typescript-eslint/no-var-requires
//     require('webpack-hot-middleware')(compiler, {
//       path: '/__webpack_hmr',
//       heartbeat: 10 * 1000,
//     }),
//   );
// }

// view engine setup
app.set('views', path.resolve('src/server', 'views'));
app.set('view engine', 'ejs');

// static
app.use(express.static(path.resolve('build/client')));

// app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(compression({ level: 5 }));
app.use(favicon(path.join(__dirname, '../../public', 'favicon.ico')));
app.use('/', indexRouters);
app.use(ssrMiddleware);

// catch 404 and forward to error handler
app.use(({ next }) => {
  if (next) {
    next(createError(404));
  }
});

// error handler
app.use((req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = req.statusMessage;
  res.locals.error = req.app.get('env') === 'development' ? req : {};
  // render the error page
  res.status(req.statusCode || 500);
  res.render('error');
  next();
});

export default app;
