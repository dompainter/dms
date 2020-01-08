module.exports = {
  testMatch: ['<rootDir>/**/*.(test).*'],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['js', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/setup-tests.js'],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
    '^\\^/(.*)$': '<rootDir>/$1'
  }
}
