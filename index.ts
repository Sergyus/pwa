// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
require('@babel/register')();
// Used by react-refresh
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.$RefreshReg$ = () => null;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.$RefreshSig$$ = () => () => null;
// Global variables for server-side
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.__CLIENT__ = false;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.__SERVER__ = true;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.__DEV__ = process.env.NODE_ENV === 'development';

// Run assets require hooks
require('./webpack/utils/hooks')();
// Run server
require('./src/server/index');
