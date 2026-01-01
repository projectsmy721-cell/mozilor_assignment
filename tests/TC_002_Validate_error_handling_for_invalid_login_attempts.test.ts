import { test, expect } from '@playwright/test';
import { Login } from '../Pages/LoginPage';
import { HomePage } from '../Pages/HomePage';

test('TC_002_Validate_error_handling_for_invalid_login_attempts', async ({ page }) => {
    const LoginsPages = new Login(page);
    const cartPage = new HomePage(page);
    await LoginsPages.advantageLaunch();
    await LoginsPages.validateInvalidLogin();
});