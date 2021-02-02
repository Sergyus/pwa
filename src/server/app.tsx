import path from 'path';
import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import compression from 'compression';
import favicon from 'serve-favicon';
import { devServer } from './utils';
import { ssr } from './middlewares';
import appRouters from './routes';

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
app.use(express.static(path.resolve(process.cwd(), 'public')));

// Enable dev-server in development
if (__DEV__) devServer(app);

app.use('/', appRouters);
app.use(ssr);

export default app;
