module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
        //   pathname: '/account123/**',
      },
    ],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};
