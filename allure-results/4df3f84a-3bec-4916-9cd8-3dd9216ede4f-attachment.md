# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\Auth.spec.ts >> Authenticate with cred and use Get method
- Location: tests\API\Auth.spec.ts:3:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  1  | import { test, expect ,request } from "@playwright/test";
  2  | 
  3  | test("Authenticate with cred and use Get method", {tag:'@smoke'},async({})=>{
  4  | 
  5  |     const apiResponse = await request.newContext({baseURL:'https://api.qaautomationlabs.com/v1/'})
  6  |    const authenticatedResponse = await apiResponse.post('auth/login',{data:{
  7  |                                                                                 "email": "qa@demo.io",
  8  |                                                                                 "password": "Password123"
  9  |                                                                             }})
  10 |      expect(authenticatedResponse.status()).toBe(200)
  11 |         const jsonBody = await authenticatedResponse.json()
  12 |     // console.log(jsonBody.data.accessToken)
  13 |     const token = jsonBody.data.accessToken
  14 |     //place authentication token in get method
  15 |                            const authenticatedUserResponse = await request.newContext({baseURL:'https://api.qaautomationlabs.com/v1/',
  16 |                                 extraHTTPHeaders:{
  17 |                                     Authentication:`Bearer ${token}`
  18 |                                 }})    
  19 |                   const userDetailsResponse =  await authenticatedUserResponse.get('auth/login')          
> 20 |                         expect(userDetailsResponse.status()).toBe(200)  
     |                                                              ^ Error: expect(received).toBe(expected) // Object.is equality
  21 |                             const userJsonBody   =  await userDetailsResponse.json()
  22 |                                 console.log(userJsonBody)
  23 | })
  24 | 
```