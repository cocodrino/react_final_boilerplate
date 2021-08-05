module.exports = {
  preset: "jest-playwright-preset",
  globals: {
    baseURL: "http://localhost:3000"
  },
  testMatch: ["**/specs/*.ts"],
  transform: {
    "\\.ts$": "ts-jest"
  },
  verbose: true
};