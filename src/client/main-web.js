import 'core-js';
import * as serviceWorker from '../serviceWorkerRegistration';
import React, { useEffect } from 'react';
import i18n from 'i18next';
import { hydrate } from 'react-dom';
import { jssServerSide } from '../utils';
import { MuiThemeProvider } from '@material-ui/core';
import { loadableReady } from '@loadable/component';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { I18nextProvider } from 'react-i18next';
import { theme } from '../theme/theme';
import '@assets/styles/index.module.scss';
import { client } from '../libs/apollo';
import Router from '../router';
import '@libs/i18n';

/**
 * React App
 */
const ReactApp = () => {
  useEffect(jssServerSide, []);
  return (
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <I18nextProvider i18n={i18n}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </I18nextProvider>
      </MuiThemeProvider>
    </ApolloProvider>
  );
};

loadableReady(() => {
  const root = document.getElementById('root');
  hydrate(<ReactApp />, root);
});
serviceWorker.register();
