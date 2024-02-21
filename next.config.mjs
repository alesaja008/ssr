/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://testrapi.bintangsempurna.co.id/"],
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "testrapi.bintangsempurna.co.id",
      },
    ],
  },
};

export default nextConfig;
