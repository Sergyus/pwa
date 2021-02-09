module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest/setup.ts'],
  globals: {
    __DEV__: true,
  },
  collectCoverageFrom: [
    'src/app/**/*.tsx',
    'src/pages/**/*.tsx',
    'src/components/**/*.tsx',
    'src/store/**/*.ts',
    '!src/store/index.ts',
    '!src/store/rootReducer.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testMatch: [
    '<rootDir>/**/__tests__/**/*.ts?(x)',
    '<rootDir>/**/?(*.)+(spec|test).ts?(x)',
  ],
  moduleNameMapper: {
    '.*\\.(css|scss|sass)$': '<rootDir>/jest/styleMock.ts',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/assetMock.ts',
  },
};
