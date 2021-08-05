// https://github.com/playwright-community/jest-playwright/#configuration

import { webkit } from 'playwright';

import { expect } from "@playwright/test"
import { matchers } from "expect-playwright"

expect.extend(matchers)

 const data ={
  // browsers: ["chromium", "firefox", "webkit"],
  browserType: webkit,
  serverOptions: {
    command: "npm start",
    port: 3000,
    launchTimeout: 10000,
    launchConfig: {
      headless: false,
      slowMo: 1000
    },
    debug: true,
    options: {
      env: {
        E2E_TESTS: "true"
      }
    },
      contextConfig: {
      }
  },
  collectCoverage: true
}

export default data