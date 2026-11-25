import{test,expect} from '../../fixture/customFixture'
import {LoginPage}from '../../pages/LoginPage'



test('TC_01 - verify login to inventory page ',{tag:'@sanity'},async({loggedIntoPage})=>{

    await loggedIntoPage.verifyInventoryPage()
    // await expect(loggedIntoPage['page']).toHaveURL(/inventory/)
    await loggedIntoPage['page'].getByText('Products').waitFor({state:'visible',timeout:5000})
    await expect(loggedIntoPage['page']).toHaveURL(/inventory/)
})
