
module.exports = {
    getUrlAndTitle: async  () => {
        console.log("Here i am printing the custom methods")
        return {
            url: await browser.getUrl(),
            title: await browser.getTitle()
        };
    },

    checkAndClick: async (selector) => {
        element = await selector;
        await element.waitForExist({timeout : 5000})
        await element.click();
        console.log("yayyyy clicked")

    },

    waitForElementAndClick: async(selector, timeout) =>
    {
        let element = await selector;
        console.log("Here under wait for element" + element)
        await element.waitUntil(async function()
        {
            console.log(await element.isDisplayed()+"----------- value is")
            return  await element.isDisplayed()===true
        },timeout,'Unable to Find the Element in specified time')
        element.click();
    }
}