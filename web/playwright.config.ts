import { defineConfig, devices } from '@playwright/test';

const baseURL = process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:3000';
console.log(`ℹ️ Using base URL "${baseURL}"`);

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './playwright',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  outputDir: './playwright/test-results',
  reporter: process.env.CI ? 'github' : 'list',

  use: {
    actionTimeout: 0,
    baseURL,
    trace: 'on-first-retry',
    headless: !!process.env.CI || !!process.env.PLAYWRIGHT_HEADLESS,
    ...devices['Desktop Chrome'],
  },

  webServer: {
    command: 'pnpm run dev',
    port: 3000,
  },
});
