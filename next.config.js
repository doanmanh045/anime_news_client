const sass = require('@zeit/next-sass')

module.exports = sass({
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
});
