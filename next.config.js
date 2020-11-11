const path = require("path");
const withSvgr = require("next-svgr");

module.exports = withSvgr({
  redirects: () => {
    return [
      {
        source: "/",
        destination: "/docs/fundamentals/getting-started",
        permanent: true,
      },
    ];
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  webpack: (config, { isServer, defaultLoaders }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        defaultLoaders.babel,
        "@mdx-js/loader",
        path.join(__dirname, "./src/lib/fm-loader"),
      ],
    });

    return config;
  },
});
