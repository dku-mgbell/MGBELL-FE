/** @type {import('next').NextConfig} */
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import withPWA from 'next-pwa';

const withVanillaExtract = createVanillaExtractPlugin();
const nextPWA = withPWA({
  dest: 'public',
});

const nextConfig = {
  experimental: {
    middlewarePrefetch: 'flexible',
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    domains: ['mgbell-s3.s3.ap-northeast-2.amazonaws.com'],
  },
};

export default nextPWA(withVanillaExtract(nextConfig));
