module.exports = {
  clearMocks: true,
  preset: 'ts-jest/presets/js-with-ts',
  testMatch: ['<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}', '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: ['/node_modules/', 'dist/'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,ts,tsx,jsx}', '!<rootDir>/src/**/*.stories.*'],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
  },
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  testEnvironment: 'jest-environment-jsdom',
};
