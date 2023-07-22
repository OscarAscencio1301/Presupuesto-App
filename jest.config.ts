export default {
    transform: {
      "^.+\\.tsx?$": "ts-jest",
      "^.+\\.svg$": "jest-transform-stub",
      },
      moduleNameMapper: {
        '\\.(css|scss)$': '<rootDir>/test/mocks/styleMock.ts',
      },
      testEnvironment: 'jest-environment-jsdom',
  }