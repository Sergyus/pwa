// import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import ErrorFallback from './components/ErrorFallback/ErrorFallback';
// import { ErrorBoundary } from 'react-error-boundary';
// import loadable from '@loadable/component';
// import Layout from './components/Layout';
//
// const Home = loadable(() => import('./pages/Home'));
// const About = loadable(() => import('./pages/About'));
// const Account = loadable(() => import('./pages/Account'));
// const Blog = loadable(() => import('./pages/Blog'));
// const Ui = loadable(() => import('./pages/Ui'));
// const Pwa = loadable(() => import('./pages/Pwa'));
// const Article = loadable(() => import('./pages/Article'));
// const NotFound = loadable(() => import('./pages/NotFound'));
//
// export default function _App(): JSX.Element {
//   return (
//     <ErrorBoundary FallbackComponent={ErrorFallback}>
//       <Layout>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/about" component={About} />
//           <Route exact path="/blog" component={Blog} />
//           <Route path="/blog/:id" component={Article} />
//           <Route path="/ui" component={Ui} />
//           <Route path="/pwa" component={Pwa} />
//           <Route path="/account" component={Account} />
//           <Route component={NotFound} />
//         </Switch>
//       </Layout>
//     </ErrorBoundary>
//   );
// }
