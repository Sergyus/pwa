import React from 'react';
import ReactDOM from 'react-dom';
import { theme } from './theme/theme';
import AppRouter from './router/AppRouter';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './libs/i18n';
import './assets/styles/index.scss';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <AppRouter />
  </MuiThemeProvider>,
  document.getElementById('root'),
);

serviceWorkerRegistration.register();
