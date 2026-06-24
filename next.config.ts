const nextConfig = {
  devIndicators: false,
  allowedDevOrigins: ['192.168.2.100'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;