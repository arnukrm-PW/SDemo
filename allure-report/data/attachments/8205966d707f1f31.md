# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login\login.spec.ts >> TC_01 - verify login to inventory page 
- Location: tests\login\login.spec.ts:6:1

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Invalid url: "/"
Call log:
  - navigating to "/", waiting until "load"

```

# Test source

```ts
  1  | import { Page , Locator ,expect } from "@playwright/test";
  2  | 
  3  | export class LoginPage
  4  | {
  5  | 
  6  |     private readonly username : Locator
  7  |     private readonly password : Locator
  8  |     private readonly LoginButton : Locator
  9  |     private readonly title : Locator
  10 |     private readonly product : Locator
  11 |     
  12 | 
  13 | 
  14 |     constructor(protected page:Page)
  15 |     {   
  16 |         this.title = page.getByText('Swag Labs')
  17 |         this.product = page.getByText('Products')
  18 |         this.username = page.getByPlaceholder('Username')
  19 |         this.password = page.getByPlaceholder('Password')
  20 |         this.LoginButton = page.getByRole('button',{name:'Login'})
  21 |         
  22 | 
  23 |     }
  24 |         
  25 |         async OpenURL() : Promise<void>
  26 |         {
> 27 |             await this.page.goto('/')
     |                             ^ Error: page.goto: Protocol error (Page.navigate): Invalid url: "/"
  28 |         }
  29 | 
  30 |     async verifyInventoryPage() : Promise<void>
  31 |         {
  32 |             await expect(this.title).toBeVisible()
  33 |             await expect(this.product).toBeVisible()
  34 |         }
  35 | 
  36 |         async enterUsername(username: string) :Promise<void>
  37 |                 {
  38 |                 await this.username.fill(username)
  39 |                 }
  40 |         
  41 |         async enterPassword(password: string): Promise<void>
  42 |                 {
  43 |                 await this.password.fill(password)
  44 |                 }
  45 |         
  46 |         async clickLogin(): Promise<void>
  47 |                 {
  48 |                 await this.LoginButton.click()
  49 |                 }
  50 | 
  51 |         async Login(username: string, password:string): Promise<void>
  52 |         {
  53 |             await this.enterUsername(username)
  54 |             await this.enterPassword(password)
  55 |             await this.clickLogin()
  56 |         }
  57 | 
  58 | 
  59 |                 
  60 | }
```