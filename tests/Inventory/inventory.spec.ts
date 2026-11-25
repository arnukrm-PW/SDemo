import{test,expect}from'../../fixture/customFixture'
import { InventoryPage } from '../../pages/InventoryPage'

test('TC_02 - add product to cart',{tag:'@regression'},async({loggedIntoInventory})=>{
    await loggedIntoInventory.addProductToCart('Sauce Labs Backpack')
    await     expect(loggedIntoInventory['page']).toHaveURL(/inventory/)
})
test('TC_03 - verify Shopping cart',{tag:'@sanity'},async({loggedIntoInventory})=>{
   await loggedIntoInventory.addProductToCart('Sauce Labs Backpack')
   await  loggedIntoInventory.clickToShoppingCart()
   await expect(loggedIntoInventory['page']).toHaveURL(/cart/)
})