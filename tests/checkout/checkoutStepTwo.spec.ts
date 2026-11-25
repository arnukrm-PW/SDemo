import{test,expect}from '../../fixture/customFixture'

test('TC_07 - get payment information and click on finish button',{tag:'@sanity'},async ({loggedIntoInventory,loggedIntoCart,loggedIntoCheckoutStepOnePage, loggedIntoCheckoutStepTwoPage})=>{

    await loggedIntoInventory.addProductToCart('Sauce Labs Backpack')
    await loggedIntoInventory.clickToShoppingCart()
await loggedIntoCart.verifyProductOnCart('Sauce Labs Backpack')
await loggedIntoCart.clickCartCheckout()
    await loggedIntoCheckoutStepOnePage.verifyCheckoutStepOnePage()
    await loggedIntoCheckoutStepOnePage.fillDetails("arun","Kumar","412021")
    await loggedIntoCheckoutStepOnePage.clickContinueOnCheckoutStepOne()
await loggedIntoCheckoutStepTwoPage.verifyCheckoutStepTwoPage()
const paymentid = await loggedIntoCheckoutStepTwoPage.getPaymentInfoValue()
console.log(paymentid)
await loggedIntoCheckoutStepTwoPage.clickFinishButton()
await expect(loggedIntoCheckoutStepTwoPage['page']).toHaveURL(/checkout-complete/)


})