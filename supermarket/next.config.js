/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['s1.static.brasilescola.uol.com.br'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  }, 
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
