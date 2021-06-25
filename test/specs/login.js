const SignUpPage = require('../pageobjects/signup.page');
const LoginPage = require('../pageobjects/login.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await SignUpPage.open();
        await LoginPage.login("vv.bisht003@hotmail.com","vv@vicky93");
        await browser.pause(5000)
       
    });
});


