/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/languages',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
