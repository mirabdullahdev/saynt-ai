/** @type {import('next').NextConfig} */

// Provide a safe BASE_URL fallback
const BASE_URL = process.env.BASE_URL || 'http://localhost';

const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    BASE_URL,
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
        protocol: BASE_URL.startsWith('https') ? 'https' : 'http',
        hostname: (() => {
          try {
            return new URL(BASE_URL).hostname;
          } catch {
            return 'localhost';
          }
        })(),
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
