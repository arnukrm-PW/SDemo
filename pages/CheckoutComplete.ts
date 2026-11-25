import { Page, Locator, expect } from '@playwright/test'

export class CheckoutCompletePage {

    private readonly titleCheckoutComplete: Locator
    private readonly thankyouMessage: Locator


    constructor(protected page: Page) {
        this.titleCheckoutComplete = page.locator('[data-test="title"]')
        this.thankyouMessage = page.locator('[data-test="complete-header"]')

    }

    async verifyTitleCheckoutComplete() {
        await expect(this.titleCheckoutComplete).toHaveText('Checkout: Complete!')
    }
    async verifyThankyouMessage() {
        await expect(this.thankyouMessage).toContainText('Thank you for your order!')
    }


}