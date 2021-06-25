//const { expect } = require("chai");
const Page = require("./page");


class LoginPage extends Page
{
    get btnSigin() { return $("//*[@id='sb-social-toolbar-root']/div//span[text()='Sign In']")}
    get username() { return $("//div/input[@type='email']")}
    get btnNext() {  return $("//div/button/span[contains(text(),'Next')]")}
    get password() { return $("//div/input[@title='Password']")}
    get btnLogin() { return $("//div/button/span[contains(text(),'Sign In')]")}

    async login(username,password)
    {
        //await browser.checkAndClick(this.btnSigin)
        await browser.waitForElementAndClick(this.btnSigin,10000);
    
        console.log("to be disabled")
        //console.log((await this.btnNext).toBeDisabled())
        expect (await this.btnNext).toBeDisabled(); 
        console.log("check completed")
        await (await this.username).setValue(username);
        expect (await this.btnNext).toBeEnabled();
        console.log("Button now enabled")
        await browser.waitForElementAndClick(this.btnNext,5000);
        await (await this.password).setValue(password);
        await browser.waitForElementAndClick(this.btnLogin,5000);
        //expect (await this.btnNext).toBeDisabled(); 

    }

}

module.exports = new LoginPage();