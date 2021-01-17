import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Layout from '../components/Layout';
import Account from '../pages/Account';
import Blog from '../pages/Blog';
import Ui from '../pages/Ui';
import Pwa from '../pages/Pwa';
import Article from '../pages/Article';
import NotFound from '../pages/NotFound';

export default function AppRouter(): JSX.Element {
  return (
    <BrowserRouter basename="/pwa">
      <Layout>
        <div className="page">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/blog" component={Blog} />
            <Route path="/blog/:id" component={Article} />
            <Route path="/ui" component={Ui} />
            <Route path="/pwa" component={Pwa} />
            <Route path="/account" component={Account} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Layout>
    </BrowserRouter>
  );
}
