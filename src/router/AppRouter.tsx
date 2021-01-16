import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Layout from '../components/Layout';
import Account from '../pages/Account';
import Blog from '../pages/Blog';
import Ui from '../pages/Ui';

export default function AppRouter(): JSX.Element {
  return (
    <BrowserRouter basename="/sergyus">
      <Layout>
        <div className="page">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/ui" component={Ui} />
            <Route path="/account" component={Account} />
          </Switch>
        </div>
      </Layout>
    </BrowserRouter>
  );
}
