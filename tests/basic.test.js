import { Selector, ClientFunction } from 'testcafe'

fixture(`First Test Suite with TestCafe`)
    .page(`https://devexpress.github.io/testcafe/example`)
    .before(async t =>{
        //test setup goes here
        // await run database
        //  await seed test data
        console.log('Before the Fixture')
    })
    .beforeEach(async t =>{
        await t.setTestSpeed(1) //between 1 to 0.1
        // Runs before each test
        console.log('Before Each test')
        //it waits 5 seconds
        // await t.setPageLoadTimeout(10)
    
    })
    .after(async t => {
        // cleaning test data
        //logging and sending data to monitoring system
        console.log('comes after method.. after fixure')
    })
    .afterEach(async t =>{
        //after each test
        console.log('after each test ')
    })


test('First Test', async t => {
    // testcafe code
    const submitbtn= Selector('#submit-button');
    const inputBox=Selector('#developer-name');
    const succesMessage= Selector('#article-header')

    //take screenshot-- target whole page
    await t.takeScreenshot({fullPage:true})
    // or ss the web  elemment
    await t.takeElementScreenshot(submitbtn)


    await t.typeText(inputBox,'Ali Ali Ali')
    // await t.wait(500)// .. seconds wait.
    await t.click(submitbtn)
            // actual, expected
    await t.expect(succesMessage.innerText).contains('hank you')


    const getLocation = ClientFunction(() => document.location.href.toString());

    await t.expect(getLocation()).contains('thank');

    // const renderedText = htmlElement.innerText;
    // await t.expect()

   

})
// skip a test
test.skip('Second Test', async t => {
    // testcafe code
    const inputBox= Selector('#submit-button');
    await t.typeText('#developer-name','Veli')
    await t.click(inputBox)
            // actual, expected
    await t.expect(Selector('#article-header').innerText).contains('Thank you');
    await t
    .expect('foo bar').contains('bar', 'string contains the expected substring')
    .expect([1, 2, 3]).contains(2, 'array contains the expected value')
    .expect({ foo: 'bar', hello: 'universe' }).contains({ foo: 'bar' }, 'object contains the expected property');
    
    //click
    await t.click('selector',{ options });
    await t.hover('selector',{options})
    await t.doubleClick('selector',{options})
    await t.rightClick('selector',{options})
    await t.selectText('selector')
    await t.typeText('selector','text')
    await t.pressKey('space','enter','escape','delete')
    await t.navigateTo('url')
    await t.drag('selector',200,500,{options})
    await t.takeScreenshot()
    await t.takeElementScreenshot('selector')
    await t.resizeWindow(800.600)

    // await t.expect()

})
// ASSERRTIONS
test('Assertions',async t =>{
    // deep equal
    await t.expect('foo').eql('foo','message')
    // not deep eql
    await t.expect('foo').notEql('foo0')
    //OK
    await t.expect(true).ok()
    //not OK
    await t.expect(false).notOk()
    // contains
    await t.expect('selector').contains('el')
    //Greater than or equal
    await t.expect(10).gt(9)
    await t.expect(10).gte(10)

    //smaller or less than
    await t.expect(10).lt(11)
    await t.expect(10).lte(10)

    // within
    await t.expect(10).within(1,100)
    await t.expect(10).notWithin(11,100)


})

// npm run test : to run all test under the ./test