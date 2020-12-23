// set tests to use UTC
process.env.TZ = 'UTC';

module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/__tests__/**/*-test.ts'],
  setupFiles: ['<rootDir>/src/__tests__/setup.ts'],
  coverageReporters: ['text', 'cobertura', 'html'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/**/*.d.ts', '!**/node_modules/**'],
};
