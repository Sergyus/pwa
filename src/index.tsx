import { hydrate } from 'react-dom';
import * as React from 'react';
import { theme } from './theme/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { loadableReady } from '@loadable/component';
import { I18nextProvider } from 'react-i18next';
import { ApolloProvider } from '@apollo/client';
import { client } from './libs/apollo';
import i18n from 'i18next';
import App from './App';
import './libs/i18n';
import './assets/styles/index.scss';

const ReactApp = () => {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <MuiThemeProvider theme={theme}>
          <I18nextProvider i18n={i18n}>
            <BrowserRouter basename="pwa">
              <CssBaseline />
              <App />
            </BrowserRouter>
          </I18nextProvider>
        </MuiThemeProvider>
      </ApolloProvider>
    </React.StrictMode>
  );
};

loadableReady(() => {
  const root = document.getElementById('root');
  hydrate(<ReactApp />, root);
});

serviceWorkerRegistration.register();
