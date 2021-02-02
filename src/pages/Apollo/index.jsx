import React from 'react';
import loadable from '@loadable/component';
import Loading from '@components/Loading';

/*
 * Due to this known issue: https://github.com/smooth-code/loadable-components/issues/173
 * Use .js extension for code-splitting file
 */
const Apollo = loadable(() => import('./Apollo'), {
  fallback: <Loading />,
});

// eslint-disable-next-line react/display-name,@typescript-eslint/explicit-module-boundary-types
export default (props) => <Apollo {...props} />;
