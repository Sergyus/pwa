import path from 'path';
import logger from 'morgan';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import favicon from 'serve-favicon';
import chalk from 'chalk';
import ssr from './ssr';
import { devServer } from './utils';

const app = express();

// Use helmet to secure Express with various HTTP headers
app.use(helmet({ contentSecurityPolicy: false }));
// Compress all requests
app.use(compression());

// Use for http request debug (show errors only)
app.use(logger('dev', { skip: (_, res) => res.statusCode < 400 }));
app.use(favicon(path.resolve(process.cwd(), 'public/favicon.ico')));
app.use(express.static(path.resolve(process.cwd(), 'public')));

// Enable dev-server in development
if (__DEV__) devServer(app);

// Use React server-side rendering middleware
app.get('*', ssr);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
app.listen(3000, 'localhost', (error) => {
  if (error) console.error(chalk.red(`==> 😭  OMG!!! ${error}`));
});
