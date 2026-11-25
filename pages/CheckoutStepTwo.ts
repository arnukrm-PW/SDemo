import{Page,Locator,expect}from'@playwright/test'

export class CheckoutStepTwoPage
{
    private readonly titleCheckoutStepTwo: Locator
    private readonly paymentInfoValue : Locator
    private readonly finishButton : Locator

    constructor(protected page : Page)
    {
        this.titleCheckoutStepTwo = page.locator('[data-test="title"]')
        this.paymentInfoValue = page.locator('[data-test="payment-info-value"]')
        this.finishButton = page.locator('[data-test="finish"]')
    }

    async verifyCheckoutStepTwoPage()
    {
            await expect(this.titleCheckoutStepTwo).toBeVisible()
    }
    async getPaymentInfoValue()
    {
           const paymentDetails =  await this.paymentInfoValue.innerText()
        return paymentDetails.replace("SauceCard #" , "")
    }
    async clickFinishButton()
    {
        await this.finishButton.click()
    }

}