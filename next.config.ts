import type { NextConfig } from 'next';
/** @type {import('next').NextConfig} */
import nextI18nextConfig from './next-i18next.config.js';

const nextConfig: NextConfig = {
  /* config options here */
  i18n: nextI18nextConfig.i18n,
  // rules: {
  //   '@typescript-eslint/no-unused-vars': 'off', // Disables the rule globally
  // },
};

export default nextConfig;
