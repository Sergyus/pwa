module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/config/jest/setup.ts'],
  globals: {
    __DEV__: true,
    __CLIENT__: true,
    __SERVER__: false,
  },
  collectCoverageFrom: [
    'src/app/**/*.tsx',
    'src/pages/**/*.tsx',
    'src/components/**/*.tsx',
    'src/store/**/*.ts',
    '!src/store/index.ts',
    '!src/store/rootReducer.ts',
  ],
  // coverageThreshold: {
  //   global: {
  //     branches: 100,
  //     functions: 100,
  //     lines: 100,
  //     statements: 100,
  //   },
  // },
  testMatch: [
    '<rootDir>/**/__tests__/**/*.ts?(x)',
    '<rootDir>/**/?(*.)+(spec|test).ts?(x)',
  ],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@root(.*)$': '<rootDir>/src$1',
    '^@api(.*)$': '<rootDir>/src/api$1',
    '^@libs(.*)$': '<rootDir>/src/libs$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@store(.*)$': '<rootDir>/src/store$1',
    '^@router(.*)$': '<rootDir>/src/router$1',
    '^@modules(.*)$': '<rootDir>/src/modules$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '.*\\.(css|scss|sass)$': '<rootDir>/config/jest/styleMock.ts',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest/assetMock.ts',
  },
};
