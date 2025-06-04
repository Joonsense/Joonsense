/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  i18n: {
    locales: ['kr', 'en'],
    defaultLocale: 'kr',
  },
}

module.exports = nextConfig
