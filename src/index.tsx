import React from 'react';
import ReactDOM from 'react-dom';
import { theme } from './theme/theme';
import './assets/styles/index.scss';
import AppRouter from './router/AppRouter';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <AppRouter />
  </MuiThemeProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
