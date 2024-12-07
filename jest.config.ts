import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './', // Path to your Next.js app
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Adjust for TypeScript setup file
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$':
      '<rootDir>/__mocks__/fileMock.ts', // Mock images
  },
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest', // Use Babel for transformation
  },
  transformIgnorePatterns: [
    'node_modules/(?!(some-esm-package|another-esm-package)/)',
  ],

  testPathIgnorePatterns: ['/node_modules/', '/__mocks__/'],
};

export default createJestConfig(customJestConfig);
