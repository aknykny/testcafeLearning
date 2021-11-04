import {Selector} from 'testcafe'
import { generateToken } from 'authenticator'

// npm install authenticator — save


let otp=generateToken('s7vz6hcysvy2hck7')
let email="ali.konya@global.com"
let pasword='Twitboy123.,'
let URL='https://login.microsoftonline.com/common/oauth2/v2.0/authorize?prompt=select_account&response_type=code&client_id=46cdaa3f-9339-4b60-bf04-4dd98cd903d7&redirect_uri=https%3A%2F%2Fauth.atlassian.com%2Flogin%2Fcallback&nonce=sjBW9Fp%2BQ87SBBsHf1cT&scope=openid%20profile%20email&state=JFyfSLi4F9E5Kx6q3ETIUBYttNyxqszz'

let emailBox=Selector('input').withAttribute('type','email')
let passwordBox=Selector('input').withAttribute('type','password')
let codeEnterOption=Selector('.table-cell.text-left.content').withText('Use a verification code from my mobile app')
let codeBox=Selector('input[type="tel"]')
let warn=Selector('div').withText('Stay signed in?')
let yesButton=Selector('input').withAttribute('type','submit')

fixture('test')
    .page(URL)
    .beforeEach(async t=>{
       await t.maximizeWindow()
    })

test.only('testtt',async t=>{
    await t.setTestSpeed(0.5)
                .typeText(emailBox,email,{paste:true})
                .pressKey('enter')
                .typeText(passwordBox,pasword,{paste:true})
                .pressKey('enter')
                .click(codeEnterOption)
                .typeText(codeBox,otp,{paste:true})
                .pressKey('enter')
                .wait(5000)
    if((await warn.innerText).length>0){
        await t.click(yesButton)
    }
})