// APP_PATH has to be either an empty string or a path prefix starting with '/'
const APP_PATH = "/myPath";
module.exports = {
  poweredByHeader: false,
  assetPrefix: APP_PATH,
  experimental: {
    basePath: APP_PATH
  }
};
