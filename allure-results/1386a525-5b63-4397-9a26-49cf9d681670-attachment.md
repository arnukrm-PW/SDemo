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

Expected: 201
Received: 200
```

# Test source

```ts
  1  | import { test, expect ,request } from "@playwright/test";
  2  | 
  3  | test("Authenticate with cred and use Get method", {tag:'@smoke'},async({})=>{
  4  | 
  5  |     const apiResponse = await request.newContext({baseURL:'https://api.qaautomationlabs.com/v1/'})
  6  |    const authenticatedResponse = await apiResponse.post('auth/login',{data:{
  7  |         "email": "qa@demo.io",
  8  |   "password": "Password123"
  9  |     }})
> 10 |      expect(authenticatedResponse.status()).toBe(201)
     |                                             ^ Error: expect(received).toBe(expected) // Object.is equality
  11 | 
  12 | 
  13 | })
  14 | 
```