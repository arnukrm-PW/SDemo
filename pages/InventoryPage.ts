
import {Page,Locator}from '@playwright/test'

export class InventoryPage
{
    private readonly inventoryCard : Locator
    private readonly shoppingCart : Locator

    constructor(protected page:Page)
    {
        this.inventoryCard = page.locator('[data-test="inventory-item"]')
        this.shoppingCart = page.locator('[data-test="shopping-cart-badge"]')

     }

     async addProductToCart(productName:string) : Promise<void>
     {
        const product =  this.inventoryCard.filter({hasText:productName})
        await product.getByText('Add to cart').click()
     }
     async clickToShoppingCart()
     {
        await this.shoppingCart.click()
     }

}