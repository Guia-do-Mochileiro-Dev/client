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
    '!src/types/*.ts',
    '!src/themes/theme.ts',
    '!src/styles/**/*.ts',
    '!src/**/mock.ts',
    '!src/pages/_document.tsx',
    '!src/pages/_app.tsx',
    '!src/components/**/index.tsx',
    '!src/components/**/types.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testMatch: ['**/__tests__/**/?(*.)+(spec|test).[tj]s?(x)'],
  moduleDirectories: ['node_modules', 'src']
}
