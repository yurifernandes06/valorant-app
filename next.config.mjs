/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://dash.valorant-api.com/:path*',
        },
      ];
    },
  };
  
  export default nextConfig;