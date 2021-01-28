import path from 'path';
import logger from 'morgan';
import express from 'express';
// import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import compression from 'compression';
// import { ssr } from './middlewares';
import appRouters from './routes';
import { devServer } from './utils';
import favicon from 'serve-favicon';
import { ssr } from './middlewares';

const app = express();

// Use helmet to secure Express with various HTTP headers
app.use(helmet({ contentSecurityPolicy: false }));

// view engine setup
app.set('views', path.resolve('src/server', 'views'));
app.set('view engine', 'ejs');

app.use(
  logger('dev', {
    skip: (_, res) => res.statusCode < 400,
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(compression({ level: 5 }));
app.use(favicon(path.resolve(process.cwd(), 'public/favicon.ico')));
app.use(express.static(path.resolve('build')));

// Enable dev-server in development
if (__DEV__) devServer(app);

app.use('/', appRouters);
app.use(ssr);
// Use React server-side rendering middleware
// app.get('*', ssr);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// app.listen(config.PORT, config.HOST, (error) => {
//   if (error) console.error(chalk.red(`==> 😭  OMG!!! ${error}`));
// });
// catch 404 and forward to error handler
// app.use(({ next }) => {
//   if (next) {
//     next(createError(404));
//   }
// });

export default app;
