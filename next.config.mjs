/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['be-deploy.vercel.app'],
  },
};

export default nextConfig;
