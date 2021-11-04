import { Selector,t } from 'testcafe'

export async function login(username, password){
    const signInBtn = Selector('#signin_button ')
    await t.click(signInBtn)
    const usernameInputBox= Selector('#user_login')
    const psswdInputBox= Selector('#user_password')
    const submitButton= Selector('.btn.btn-primary')


    await t.typeText(usernameInputBox,'username',{paste:true})
    await t.typeText(psswdInputBox,'password',{paste:true})
    await t.click(submitButton)

}

export async function logOut(){
    const userIcon=Selector('.dropdown-toggle').nth(1)
    const logoutBtn=Selector('#logout_link')

    await t.click(userIcon)
    await t.click(logoutBtn)
}