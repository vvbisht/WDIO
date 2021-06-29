const Page = require('./page');
//import {waitVisible} from '../customcommands/elementCommands'
/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignUpPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnSignIn () {return  $("//*[@id='sb-social-toolbar-root']/div//span[text()='Sign In']") }
    get btnCreateAccount () { return $("//div/button/span[text()='Create New Account']") }
    get btnCreate () { return $("//div/button/span[text()='Create']") }
    get selectDay() { return $("//div/select[@title='Day']")}
    get selectMonth() { return $("//div/select[@title='Month']")}
    get selectyear() { return $("//div/select[@title='Year']")}
    get btnNext() {return $("//div/button[@class='next-button text-button']/div")}
    get selectRegion() {return $("//div/select[@title='Country/Region']")}
    get emailAddress() {return $("//div/input[@placeholder='Email Address']")}
    get password() {return $("//div/input[@placeholder='Password']")}
    get renterPassword () {$("//div/input[@placeholder='Re-enter Password']")}




   
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async create (day, month, year, country) {

        console.log("Hello this should print")
        //await (await this.btnSignIn).isDisplayed();
        let result = await browser.getUrlAndTitle();
        console.log("---------------" + result.url);
        await browser.checkAndClick(this.btnSignIn);
        //await (await this.btnSignIn).click();
        await (await this.btnCreateAccount).click();
        await (await this.btnCreate).click();
        await (await this.selectDay).selectByVisibleText(day);
        await (await this.selectMonth).selectByVisibleText(month);
        await (await this.selectyear).selectByVisibleText(year);
        await browser.checkAndClick(this.btnNext);
        await (await this.selectRegion).selectByVisibleText(country);



      
    }

    /**
     * overwrite specifc options to adapt it to page object
     */

}

module.exports = new SignUpPage();
