/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
