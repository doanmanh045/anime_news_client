// const withSass = require('@zeit/next-sass')

module.exports = {
  webpack(config, { dev }) {
    if (dev) {
      config.devtool = 'source-map';
    }
    return config;
  }
};
