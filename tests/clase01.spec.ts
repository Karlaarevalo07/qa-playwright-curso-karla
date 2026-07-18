import { test, expect } from '@playwright/test';

test('La página carga', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/STORE/);
  await expect(page.locator('#navbarExample')).toBeVisible();
});


test('El menú de categoria es visible', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#cat')).toBeVisible();
});


test('La barra de navegacion tiene los enlaces', async ({ page }) => {
  await page.goto('/');
  const nav = page.locator('#navbarExample');
  await expect(nav.getByRole('link', { name: 'Home' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Contact' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'About us' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Cart' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Log in' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Sign up' })).toBeVisible();
});