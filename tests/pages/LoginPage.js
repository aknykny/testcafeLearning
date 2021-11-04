import { Selector,t } from "testcafe";

class LoginPage{
    constructor(){
        this.usernameInput=Selector('#user_login')
        this.passwordInput=Selector('#user_password')
        this.submitBtn=Selector('.btn.btn-primary')
    }

    async loginToApp(username, password){
            await t
            .typeText(this.usernameInput,username,{paste:true, replace:true})
            .typeText(this.passwordInput,password,{paste:true, replace:true})
            .click(this.submitBtn)
    }
}

export default LoginPage