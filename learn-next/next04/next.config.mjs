/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites(){
        return [
            {
                source:"/gioi-thieu",
                destination:"/about"
            }
        ]
    }
};

export default nextConfig;
