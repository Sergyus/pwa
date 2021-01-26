import React, { useEffect } from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import * as serviceWorker from './serviceWorkerRegistration';
import { loadableReady } from '@loadable/component';
import { I18nextProvider } from 'react-i18next';
import { ApolloProvider } from '@apollo/client';
import { jssServerSide } from './utils';
import { theme } from './theme/theme';
import { client } from './libs/apollo';
import './assets/styles/index.scss';
import Router from './router';
import i18n from 'i18next';
import './libs/i18n';

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
