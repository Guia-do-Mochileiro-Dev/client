module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!stories/*.stories.tsx',
    '!src/types/**/*.d.ts',
    '!src/graphql/**/*.ts',
    '!src/api/*.ts',
    '!src/styles/**/*.ts',
    '!src/**/mock.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testMatch: ['**/__tests__/**/?(*.)+(spec|test).[tj]s?(x)'],
  moduleDirectories: ['node_modules', 'src']
}
