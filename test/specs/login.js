const SignUpPage = require('../pageobjects/signup.page');
const LoginPage = require('../pageobjects/login.page');
const GamePage =  require('../pageobjects/games.page')
const loginData = require('../testdata/logindata')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login(loginData.username,loginData.password);       
    });
});


