module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "^@tech-connect/(.*)$": "<rootDir>/src/$1"
  }
};
