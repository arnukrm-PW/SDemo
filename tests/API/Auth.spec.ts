import { test, expect ,request } from "@playwright/test";

test("Authenticate with cred and use Get method", {tag:'@smoke'},async({})=>{

    const apiResponse = await request.newContext({baseURL:'https://api.qaautomationlabs.com/v1/'})
   const authenticatedResponse = await apiResponse.post('auth/login',{data:{
                                                                                "email": "qa@demo.io",
                                                                                "password": "Password123"
                                                                            }})
     expect(authenticatedResponse.status()).toBe(200)
        const jsonBody = await authenticatedResponse.json()
    // console.log(jsonBody.data.accessToken)
    const token = jsonBody.data.accessToken
    //place authentication token in get method
                           const authenticatedUserResponse = await request.newContext({baseURL:'https://api.qaautomationlabs.com/v1/',
                                extraHTTPHeaders:{
                                    Authentication:`Bearer ${token}`
                                }})    
                  const userDetailsResponse =  await authenticatedUserResponse.get('users')          
                        expect(userDetailsResponse.status()).toBe(200)  
                            const userJsonBody   =  await userDetailsResponse.json()
                                console.log(await userJsonBody.data[0].firstName)
                                console.log(await userJsonBody.data[0].email)
})
