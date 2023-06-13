export default {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
    setupFiles: ['./jest.setup.ts'],
    testEnvironment: 'jest-environment-jsdom',
  
}