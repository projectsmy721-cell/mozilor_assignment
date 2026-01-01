import { test, expect } from '@playwright/test';
import { Login  } from '../Pages/LoginPage';
import {  HomePage } from '../Pages/HomePage';


test('TC_001_Homepage_Dynamic_Content', async ({ page }) => {
  const LoginsPages = new Login(page);
  const cartPage = new HomePage(page);
  await LoginsPages.advantageLaunch();
  await LoginsPages.createNewAccountLogin();
});





























































  








