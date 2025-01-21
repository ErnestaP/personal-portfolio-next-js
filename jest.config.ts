import nextJest from 'next/jest';

const createJestConfig = nextJest({ dir: './' });

const baseConfig = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Maps `@/` to `src/`
    '^next/image$': '<rootDir>/src/__tests__/__mocks__/next/image.tsx',
  },
  transform: { '^.+\\.(ts|tsx|js|jsx)$': '@swc/jest' },
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
};

const customJestConfig = {
  ...baseConfig,
  projects: [
    {
      ...baseConfig,
      setupFilesAfterEnv: ['<rootDir>/jest.setup.tsx'],
      moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^next/image$': '<rootDir>/src/__tests__/__mocks__/next/image.tsx',
      },
      displayName: 'components',
      testMatch: ['**/__tests__/components/**/*.test.{ts,tsx}'],
      testEnvironment: 'jsdom',
    },
    {
      ...baseConfig,
      displayName: 'utils',
      testMatch: ['**/__tests__/utils/**/*.test.{ts,tsx}'],
      testEnvironment: 'node',
    },
  ],
  collectCoverage: true,
  coverageReporters: ["text"],
};

export default createJestConfig(customJestConfig);
