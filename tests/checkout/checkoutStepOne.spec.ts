import{test,expect}from"../../fixture/customFixture"
import {CheckoutStepOnePage}from '../../pages/CheckoutStepOne'

test('TC_06 fill checkout step one details',{tag:'@sanity'},async ({loggedIntoInventory,loggedIntoCart,loggedIntoCheckoutStepOnePage})=>{
    await loggedIntoInventory.addProductToCart("Sauce Labs Backpack")
    await loggedIntoInventory.clickToShoppingCart()
    await loggedIntoCart.verifyProductOnCart("Sauce Labs Backpack")
    await loggedIntoCart.clickCartCheckout()
    await loggedIntoCheckoutStepOnePage.verifyCheckoutStepOnePage()
    await loggedIntoCheckoutStepOnePage.fillDetails("Arun", "Kumar","412021")
    await loggedIntoCheckoutStepOnePage.clickContinueOnCheckoutStepOne()
    await loggedIntoCheckoutStepOnePage['page'].locator('[data-test="title"]').waitFor({state:"visible",timeout:5000})
   await  expect(loggedIntoCheckoutStepOnePage['page']).toHaveURL(/checkout-step-two/)
})