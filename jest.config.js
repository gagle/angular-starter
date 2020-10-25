module.exports = {
  collectCoverage: true,
  coverageReporters: [
    'lcov'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: {
        before: [
          'jest-preset-angular/build/InlineFilesTransformer',
          'jest-preset-angular/build/StripStylesTransformer'
        ]
      },
      diagnostics: {
        ignoreCodes: [151001]
      },
      isolatedModules: true
    }
  },
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: [
    '<rootDir>/src/setup-jest.ts'
  ],
  restoreMocks: true,
  reporters: [
    'default'
  ],
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/src/environments/'
  ],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/app/$1'
  }
};
