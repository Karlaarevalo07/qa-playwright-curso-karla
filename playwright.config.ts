import {defineConfig, devices}
from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  reporter: [['list'], ['html', {open: 'never'}]],
  use: {
    baseURL: 'https://www.demoblaze.com/',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [{name: 'chromium0',
    use: {...devices ['Desktop Chrome']}}],
});