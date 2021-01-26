import path from 'path';
import express from 'express';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import favicon from 'serve-favicon';
import { ssr } from './middlewares';
import indexRouters from './routes';

const app = express();

// import { devServer } from './utils';
// if (__DEV__) {
//   devServer(app);
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
app.use(ssr);

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
