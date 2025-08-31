/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'be-deploy.vercel.app',
      },
    ],
  },
};

export default nextConfig;
