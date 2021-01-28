function isWebTarget(caller) {
  return Boolean(caller && caller.target === 'web');
}

function isWebpack(caller) {
  return Boolean(caller && caller.name === 'babel-loader');
}

module.exports = (api) => {
  const web = api.caller(isWebTarget);
  const webpack = api.caller(isWebpack);

  return {
    presets: [
      '@babel/typescript',
      '@babel/react',
      [
        '@babel/env',
        {
          useBuiltIns: web ? 'entry' : undefined,
          corejs: web ? 'core-js@3' : false,
          targets: !web ? { node: 'current' } : undefined,
          modules: webpack ? false : 'commonjs',
        },
      ],
    ],
    plugins: [
      '@loadable/babel-plugin',
      '@babel/plugin-syntax-dynamic-import',
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      [
        '@babel/plugin-transform-runtime',
        {
          regenerator: true,
        },
      ],
    ],
    env: {
      development: {
        plugins: ['react-refresh/babel'],
      },
      production: {
        plugins: ['transform-remove-console'],
      },
    },
  };
};
