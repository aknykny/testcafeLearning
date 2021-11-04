import { Selector } from 'testcafe'
import Navbar from './pages/Navbar'

const navbar = new Navbar()

fixture`Forgotten password tests: `
    .page `http://zero.webappsecurity.com/index.html`

test('User can request new passsword and ', async t =>{
    await t.setTestSpeed(0.8)
    // const signInBtn = Selector('#signin_button')
    await t.click(navbar.signingButton)
    navbar.waitFor(3000) //inheritence

    const linkToForgottenPass= Selector ('a').withText('Forgot your password ?')
    await t.click(linkToForgottenPass)
    const emailInputBox= Selector("#user_email")
    const message=Selector('div').innerText

    await t.typeText(emailInputBox,'ali@gmail.com',{paste:true})
    await t.pressKey('enter')

    await t.expect(message).contains('ali@gmail.com')
    const addNewPaye = Selector('a').withText('Add new payee')
    // feed back form 
    const formsubmitbutton=Selector('input').withAttribute('value','Send Message')

    })
test( `user make a search`, async t =>{
    navbar.search('search text')
})




