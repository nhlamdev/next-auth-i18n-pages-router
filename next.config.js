/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'via.placeholder.com',
            'avatars.githubusercontent.com',
            'lh3.googleusercontent.com',
        ],
    },
    async rewrites() {
        return [
            {
                source: '/services/:path*',
                destination: 'http://localhost:4000/:path*',
            },
        ];
    },
};

module.exports = nextConfig;
