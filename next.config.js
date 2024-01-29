module.exports = {
  distDir: 'dist',
  output: "export", // comment this line while development
  assetPrefix: "/",
  basePath: "",
  trailingSlash: true, // comment this line while development
  swcMinify: true,
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/",
        permanent: true
      }
    ];
  }
};
