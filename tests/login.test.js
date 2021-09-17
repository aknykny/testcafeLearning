import { Selector } from "testcafe";

fixture (`Login Tests`)
    .page(`http://zero.webappsecurity.com/index.html`)

test.skip('user can not login with invalid credentials', async t =>{
    const signInBtn = Selector('#signin_button')
    await t.click(signInBtn)

    const loginForm = Selector('#login_form')
    await t.expect(loginForm.exists).ok();

    const usernameInputBox= Selector('#user_login')
    const psswdInputBox= Selector('#user_password')
    const submitButton= Selector('.btn.btn-primary')


    await t.typeText(usernameInputBox,'invusername',{paste:true})
    await t.typeText(psswdInputBox,'password',{paste:true})
    await t.click(submitButton)

    const loginErrorMessage=Selector('.alert.alert-error')
    await t.expect(loginErrorMessage.innerText).contains('Login and/or password are wrong.')
    
})

test('user can login with valid credentials', async t =>{
    const signInBtn = Selector('#signin_button')
    await t.click(signInBtn)

    const loginForm = Selector('#login_form')
    await t.expect(loginForm.exists).ok();

    const usernameInputBox= Selector('#user_login')
    const psswdInputBox= Selector('#user_password')
    const submitButton= Selector('.btn.btn-primary')


    await t.typeText(usernameInputBox,'username',{paste:true})
    await t.typeText(psswdInputBox,'password',{paste:true})
    await t.click(submitButton)

    const accountSummeryTab= Selector('#account_summary_tab')
    await t.expect(accountSummeryTab.exists).ok()
    await t.expect(submitButton.exists).notOk()
    
    const userIcon=Selector('.dropdown-toggle').nth(1)
    const logoutBtn=Selector('#logout_link')

    await t.click(userIcon)
    await t.click(logoutBtn)
    await t.expect(accountSummeryTab.exists).notOk()
    await t.expect(signInBtn.exists).ok()
    
    
})