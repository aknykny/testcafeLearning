import { Selector } from 'testcafe'

fixture(`First Test Suite with TestCafe`)
    .page(`https://devexpress.github.io/testcafe/example`)


test('First Test', async t => {
    // testcafe code
    const inputBox= Selector('#submit-button');
    await t.typeText('#developer-name','Ali')
    await t.click(inputBox)
            // actual, expected
    await t.expect(Selector('#article-header').innerText).contains('Thank you');
    // await t.expect()


})

// npm run test : to run all test under the ./test