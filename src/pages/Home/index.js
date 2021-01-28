/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/*
 * Due to this known issue: https://github.com/smooth-code/loadable-components/issues/173
 * Use .js extension for code-splitting file
 */

import React from 'react';
import loadable from '@loadable/component';
import Loading from '../../components/Loading';

const Home = loadable(() => import('./Home'), {
  // eslint-disable-next-line react/jsx-filename-extension
  fallback: <Loading />,
});

// eslint-disable-next-line react/display-name
export default (props) => <Home {...props} />;
