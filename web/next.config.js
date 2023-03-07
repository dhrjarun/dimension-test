/* eslint-disable no-param-reassign */
const { PrismaPlugin } = require('experimental-prisma-webpack-plugin');

/**
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function getConfig(config) {
  return config;
}

/**
 * @link https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
module.exports = getConfig({
  output: 'standalone',
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ['@dimension/auth', '@dimension/api', '@dimension/db'],
  // https://github.com/prisma/prisma/issues/17687#issuecomment-1414826476
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()];
    }

    return config;
  },
});
