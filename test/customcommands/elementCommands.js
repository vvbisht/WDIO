

module.exports= async function waitForElementVisibility(element, time)
{
    console.log('I am under custom method is Displayed')

        const ele = await $(element);
        let value = await ele.waitForExist({timeout:$(time)})
        console.log("value is now : "+ value)

       return check;


}