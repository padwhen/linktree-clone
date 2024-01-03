/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['pbs.twimg.com', 'media.licdn.com', 'img.youtube.com'],
    }
}

module.exports = nextConfig
