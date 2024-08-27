/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        APP_NAME: process.env.APP_NAME,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "placeimg.com",
                port: "",
            },
        ],
    },
};

export default nextConfig;
