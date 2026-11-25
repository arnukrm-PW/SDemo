import { Page , Locator ,expect } from "@playwright/test";

export class LoginPage
{

    private readonly username : Locator
    private readonly password : Locator
    private readonly LoginButton : Locator
    private readonly title : Locator
    private readonly product : Locator
    


    constructor(protected page:Page)
    {   
        this.title = page.getByText('Swag Labs')
        this.product = page.getByText('Products')
        this.username = page.getByPlaceholder('Username')
        this.password = page.getByPlaceholder('Password')
        this.LoginButton = page.getByRole('button',{name:'Login'})
        

    }
        
        async OpenURL() : Promise<void>
        {
            await this.page.goto('/')
        }

    async verifyInventoryPage() : Promise<void>
        {
            await expect(this.title).toBeVisible()
            await expect(this.product).toBeVisible()
        }

        async enterUsername(username: string) :Promise<void>
                {
                await this.username.fill(username)
                }
        
        async enterPassword(password: string): Promise<void>
                {
                await this.password.fill(password)
                }
        
        async clickLogin(): Promise<void>
                {
                await this.LoginButton.click()
                }

        async Login(username: string, password:string): Promise<void>
        {
            await this.enterUsername(username)
            await this.enterPassword(password)
            await this.clickLogin()
        }


                
}