/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
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

module.exports = nextConfig;
