import { test, expect } from '@playwright/test';

test('Navigate and verify Client Work page', async ({ page }) => {
  // Step 1: Navigate to EPAM homepage
  await page.goto('https://www.epam.com/');

  // Step 2: Click on "Services" from the header menu
  await page.getByRole('link', { name: 'Services', exact: true }).click();

  // Step 3: Click on "Explore Our Client Work" link
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  // Step 4: Verify "Client Work" text is visible on the page
  const clientWorkText = await page.getByText('Client Work');
  await expect(clientWorkText).toBeVisible();
});