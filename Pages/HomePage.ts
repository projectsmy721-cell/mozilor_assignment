import { Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async userLogout() {
        await this.page.locator('#menuUser').click();
        await this.page.getByRole('link', { name: 'Sign out' }).click();
        await expect(this.page.locator('#menuUser')).toBeVisible({ timeout: 30000 });
    }
    async addProductToCartAndCheckout() {
    await this.page.getByRole('link', { name: 'TabletsCategoryTxt' }).click();
    await expect(this.page.getByRole('heading', { name: 'TABLETS' })).toBeVisible({ timeout: 30000 });
    await this.page.locator('//*[@translate="SHOP_NOW"]').first().click();
    await this.page.getByRole('button', { name: 'ADD TO CART' }).click(); 
    await this.page.locator('#menuCart').click();
    await expect(this.page.locator('#checkOutButton')).toBeVisible({ timeout: 50000 });
    await this.page.locator('#checkOutButton').click();
    await expect(this.page.getByRole('heading', { name: 'ORDER PAYMENT' })).toBeVisible({ timeout: 70000 });
    await this.page.getByRole('button', { name: 'NEXT' }).click();
    await this.page.locator('input[name="safepay_username"]').fill('testuser123');
    await this.page.locator('input[name="safepay_password"]').fill('Password123');
    await this.page.locator('#pay_now_btn_SAFEPAY').click();
      await expect(this.page.getByRole('heading', { name: 'ORDER PAYMENT' })).toBeVisible({ timeout: 30000 });
    }

    async addProductToCartAndCheckoutWithoutLogin() {
        await this.page.getByRole('link', { name: 'TabletsCategoryTxt' }).click();
        await expect(this.page.getByRole('heading', { name: 'TABLETS' })).toBeVisible({ timeout: 30000 });
        await this.page.locator('//*[@translate="SHOP_NOW"]').first().click();
        await this.page.getByRole('button', { name: 'ADD TO CART' }).click();
        await this.page.locator('#menuCart').click();
        await expect(this.page.locator('#checkOutButton')).toBeVisible({ timeout: 50000 });
        await this.page.locator('#checkOutButton').click();
        await expect(this.page.getByRole('heading', { name: 'ORDER PAYMENT' })).toBeVisible({ timeout: 70000 });
        await this.page.locator('input[name="usernameInOrderPayment"]').fill('testuser123');
        await this.page.locator('input[name="passwordInOrderPayment"]').fill('Password123');
        await this.page.locator('#login_btn').click();
        await expect(this.page.getByRole('button', { name: 'NEXT' })).toBeVisible({ timeout: 30000 });
        await this.page.getByRole('button', { name: 'NEXT' }).click();
        await this.page.locator('input[name="safepay_username"]').fill('testuser123');
        await this.page.locator('input[name="safepay_password"]').fill('Password123');
        await this.page.locator('#pay_now_btn_SAFEPAY').click();
        await expect(this.page.getByRole('heading', { name: 'ORDER PAYMENT' })).toBeVisible({ timeout: 30000 });
    }

}

