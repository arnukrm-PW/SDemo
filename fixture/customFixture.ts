import{test as base , expect , Page, Locator} from "@playwright/test"
import loginData from '../testData/loginData.json'
import {LoginPage}from '../pages/LoginPage'
import { InventoryPage } from "../pages/InventoryPage"
import { CartPage } from '../pages/CartPage'
import {CheckoutStepOnePage}from '../pages/CheckoutStepOne'
import {CheckoutStepTwoPage}from '../pages/CheckoutStepTwo'
import {CheckoutCompletePage}from'../pages/CheckoutComplete'



type myFixture = {
    loggedIntoPage : LoginPage,
    loggedIntoInventory : InventoryPage,
    loggedIntoCart : CartPage
    loggedIntoCheckoutStepOnePage : CheckoutStepOnePage
    loggedIntoCheckoutStepTwoPage  :CheckoutStepTwoPage
    loggedIntoCheckoutCompletePage : CheckoutCompletePage

}

export const test  = base.extend<myFixture>({

loggedIntoPage : async ({page},use)=>{
const loginPage = new LoginPage(page)
    await loginPage.OpenURL()
    await loginPage.Login(loginData.validCredential.username,loginData.validCredential.password)
    await loginPage.verifyInventoryPage()
console.log(" BEFORE USE ")
await use(loginPage)
console.log(" After USE ")
},
loggedIntoInventory : async({page,loggedIntoPage},use)=>{
       const inventoryPage = new InventoryPage(page)
       await use(inventoryPage)
},
loggedIntoCart : async ({page,loggedIntoPage},use)=>{
const cartPage = new CartPage(page)
await use(cartPage)
},
loggedIntoCheckoutStepOnePage:async({page, loggedIntoPage},use)=>{
     const checkoutStepOnePage = new CheckoutStepOnePage(page)
     await use(checkoutStepOnePage)
},
loggedIntoCheckoutStepTwoPage:async({page,loggedIntoPage},use)=>{
    const checkoutStepTwoPage = new CheckoutStepTwoPage(page)
    await use(checkoutStepTwoPage)
},
loggedIntoCheckoutCompletePage : async ({page,loggedIntoPage},use)=>{
   const checkoutCompletePage = new CheckoutCompletePage(page)
    await use(checkoutCompletePage)
}   


})
export {expect}