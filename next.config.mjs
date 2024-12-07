/** @type {import('next').NextConfig} */
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import withPWA from 'next-pwa';

const withVanillaExtract = createVanillaExtractPlugin();
const nextPWA = withPWA({
  dest: 'public',
});

const nextConfig = {
  experimental: {
    middlewarePrefetch: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextPWA(withVanillaExtract(nextConfig));
