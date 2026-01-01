import { Page, expect } from '@playwright/test';

export class Login {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async advantageLaunch() {
        const startTime = Date.now();
        await this.page.goto('https://www.advantageonlineshopping.com/');
        await expect(this.page.locator('#menuUser')).toBeVisible();
    }
    async createNewAccountLogin() {
    await this.page.locator('#menuUser').click();
    const createNewAccount = await this.page.getByRole('link', { name: 'CREATE NEW ACCOUNT' });
    await createNewAccount.click();
    await expect(this.page.getByRole('heading', { name: 'CREATE ACCOUNT' })).toBeVisible({ timeout: 10000 });
    const username = await this.page.getByRole('textbox', { name: 'usernameRegisterPage' });
    await this.page.locator('[name="usernameRegisterPage"]').fill('testuser123');
    await this.page.locator('[name="emailRegisterPage"]').fill('testuser123@example.com');
    await this.page.locator('[name="passwordRegisterPage"]').fill('Password123');
    await expect(this.page.locator('[name="confirm_passwordRegisterPage"]')).toBeVisible();
    await this.page.locator('[name="confirm_passwordRegisterPage"]').fill('Password123');
    await this.page.locator('input[name="i_agree"]').check();
    await this.page.getByRole('button', { name: /register/i }).click();
    }
    async userLogin() {
        await this.page.locator('#menuUser').click();
        await this.page.locator('input[name="username"]').fill('testuser123');
        await this.page.locator('input[name="password"]').fill('Password123');
        await this.page.getByRole('button', { name: /sign in/i }).click();
        await expect(this.page.locator('#menuUser')).toBeVisible({ timeout: 20000 });
        // Verify successful login by checking for the username display
    }
    async validateInvalidLogin() {
        await this.page.locator('#menuUser').click();
        await this.page.locator('input[name="username"]').fill('invaliduser');
        await this.page.locator('input[name="password"]').fill('invalidpassword');
        await this.page.getByRole('button', { name: /sign in/i }).click(); 
        const errorMessage = this.page.locator('//*[contains(text(),"Incorrect user name or password.")]');
        await expect(errorMessage).toBeVisible({ timeout: 10000 });
    }
}