module.exports = {
  output: "export", // comment this line while development
  assetPrefix: "/",
  exportTrailingSlash: true, // comment this line while development
  basePath: "",
  //   trailingSlash: true,
  swcMinify: true,
  env: {
    // NEXT_PUBLIC_BASE_URL: "http://localhost:3000/",
    NEXT_PUBLIC_BASE_URL: "/",
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
