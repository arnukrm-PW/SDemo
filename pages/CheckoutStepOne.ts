import{Page,Locator,expect}from '@playwright/test'

export class CheckoutStepOnePage
{
    private readonly title : Locator
    private readonly postalCode : Locator
    private readonly lastName : Locator
    private readonly firstName : Locator
    private readonly continueButton : Locator

    constructor(protected page : Page){
        this.title = page.locator('[data-test="title"]')
        this.firstName = page.locator('[data-test="firstName"]')
        this.lastName = page.locator('[data-test="lastName"]')
        this.postalCode =page.locator('[data-test="postalCode"]')
        this.continueButton = page.locator('[data-test="continue"]')
    }
    async verifyCheckoutStepOnePage()
    {
        await expect(this.title).toHaveText('Checkout: Your Information')
    }

    async fillDetails(firstName:string,LastName:string ,Postal:string ):Promise<void>
    {
        await this.firstName.fill(firstName)
        await this.lastName.fill(LastName)
        await this.postalCode.fill(Postal)
    }
    async clickContinueOnCheckoutStepOne()
    {
        await this.continueButton.click()
    }
}