import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: ['<rootDir>/e2e/'],
  verbose: true,
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
};

export default config;
