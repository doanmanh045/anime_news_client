const sass = require('@zeit/next-sass')
// const withOptimizedImages = require('next-optimized-images');
// module.exports = {
//   reactStrictMode: true,
//   distDir: 'build'
// }
module.exports = {
  reactStrictMode: true,
  distDir: 'build',
      exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
      ) {
        return {
          "/": { page: "/" },
          "/blog": { page: "/blog" },
          "/video": { page: "/video" }
        };
      }
    };