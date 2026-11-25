import { Page , Locator, expect  } from "@playwright/test";

export class CartPage
{

    private readonly cartItem : Locator
    private readonly cartButton : Locator

    constructor(protected page:Page)
    {
        this.cartItem = page.locator('[data-test="inventory-item"]')
        this.cartButton = page.locator('[data-test="checkout"]')
    }

    async verifyProductOnCart(productName:string)
    {
       await  expect ( this.cartItem.filter({hasText:productName})).toBeVisible()
    }
    async clickCartCheckout()
    {
        await this.cartButton.click()
    }
}
