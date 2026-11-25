import { CartPage } from "../../pages/CartPage";
import {test,expect}from'../../fixture/customFixture'

test('TC_04 - verify Product on cart page',{tag:'@sanity'},async({loggedIntoInventory,loggedIntoCart})=>{
    await loggedIntoInventory.addProductToCart('Sauce Labs Backpack')
    await loggedIntoInventory.clickToShoppingCart()
await loggedIntoCart.verifyProductOnCart('Sauce Labs Backpack')
 await expect(loggedIntoCart['page']).toHaveURL(/cart/)
   
})
test('TC_05 - user to navigate to Checkout Step 1 page',{tag:'@sanity'},async({loggedIntoInventory,loggedIntoCart})=>{
    await loggedIntoInventory.addProductToCart('Sauce Labs Backpack')
    await loggedIntoInventory.clickToShoppingCart()
await loggedIntoCart.verifyProductOnCart('Sauce Labs Backpack')
 await expect(loggedIntoCart['page']).toHaveURL(/cart/)
    await loggedIntoCart.clickCartCheckout()
   await  expect(loggedIntoCart['page']).toHaveURL(/checkout-step-one/)
})