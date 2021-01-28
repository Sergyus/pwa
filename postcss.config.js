module.exports = {
  plugins: [
    require('autoprefixer'),
    process.env.NO && require('postcss-csso'),
  ].filter(Boolean),
};
