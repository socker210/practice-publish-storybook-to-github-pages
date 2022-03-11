module.exports = {
  snapshotSerializers: ['@emotion/jest/serializer'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
}
