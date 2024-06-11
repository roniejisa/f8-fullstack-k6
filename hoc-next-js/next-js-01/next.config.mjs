/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'placeimg.com',
            port: '',
          },
        ],
      },
};

export default nextConfig;
