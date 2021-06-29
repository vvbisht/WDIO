const signUp = require('../pageobjects/signup.page')
const signupData = require('../testdata/signupdata')

describe("Verify the sign up functinality", () => {
it("should enter valid signup details", async () =>{
    await signUp.open();
    await signUp.create(signupData.Day,signupData.Month,signupData.Year,signupData.Country)


}
)
})