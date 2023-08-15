module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        config: {
          path: "./postcss.config.js",
        },
      },
    },
  },
  images: {
    domains: ["upload.wikimedia.org"],
  },
};
