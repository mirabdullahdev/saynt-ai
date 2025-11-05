/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // enables /src/app support
  },
  env: {
    BASE_URL: process.env.BASE_URL || 'http://localhost',
    MONGO_URI: process.env.MONGO_URI || '',
    SALT_ROUNDS: process.env.SALT_ROUNDS || '10',
    SALT_SECRET: process.env.SALT_SECRET || '',
    SMTP_USER: process.env.SMTP_USER || '',
    SMTP_PASS: process.env.SMTP_PASS || '',
    SMTP_EMAIL: process.env.SMTP_EMAIL || '',
    PUBLIC_PATH: process.env.PUBLIC_PATH || '',
  },
  images: {
    remotePatterns: [
      {
        protocol: (process.env.BASE_URL || 'http://localhost').startsWith('https') ? 'https' : 'http',
        hostname: process.env.BASE_URL ? new URL(process.env.BASE_URL).hostname : 'localhost',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.saynt.org',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
