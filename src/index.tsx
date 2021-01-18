import React from 'react';
import ReactDOM from 'react-dom';
import { theme } from './theme/theme';
import AppRouter from './router/AppRouter';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { I18nextProvider } from 'react-i18next';
import { ApolloProvider } from '@apollo/client';
import { client } from './libs/apollo';
import i18n from 'i18next';
import './libs/i18n';
import './assets/styles/index.scss';
// import { ServiceWorkerProvider } from './libs/service-worker';

ReactDOM.hydrate(
  // <ServiceWorkerProvider>
  <ApolloProvider client={client}>
    <MuiThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <CssBaseline />
        <AppRouter />
      </I18nextProvider>
    </MuiThemeProvider>
  </ApolloProvider>,
  // </ServiceWorkerProvider>
  document.getElementById('root'),
);

serviceWorkerRegistration.register();
