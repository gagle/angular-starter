module.exports = {
  preset: 'jest-preset-angular',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: [
        'jest-preset-angular/build/InlineFilesTransformer',
        'jest-preset-angular/build/StripStylesTransformer'
      ],
      diagnostics: {
        ignoreCodes: [151001]
      },
      isolatedModules: true
    }
  },
  setupFilesAfterEnv: [
    './src/setup-jest.ts'
  ],
  restoreMocks: true,
  reporters: [
    'default',
    'jest-junit'
  ],
  coverageReporters: [
    'html',
    'cobertura'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/src/environments/'
  ],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/app/$1'
  }
};
