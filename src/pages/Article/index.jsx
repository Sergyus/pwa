import React from 'react';
import loadable from '@loadable/component';
import Loading from '@components/Loading';

/*
 * Due to this known issue: https://github.com/smooth-code/loadable-components/issues/173
 * Use .js extension for code-splitting file
 */
const Article = loadable(() => import('./Article'), {
  fallback: <Loading />,
});

// eslint-disable-next-line react/display-name
export default (props) => <Article {...props} />;
