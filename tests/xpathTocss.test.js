import { Selector, t } from 'testcafe'
// import {login, logOut} from '../helper'
import LoginPage from '../page-objects/pages/LoginPage'
import xPathToCss from 'xpath-to-css'
import Navbar from '../page-objects/components/Navbar'

const loginpage=new LoginPage()
const navbar=new Navbar()

fixture (`xpath test suite`)
    .page(`http://zero.webappsecurity.com/index.html`)

test.before(async t=>{
    await loginpage.loginToApp('username','password')

})('xpath test 111111', async t =>{
    //action code goes here

    // const xpathVar="//a[.='Account Activity']"
    // const cssElement=xPathToCss(xpathVar)
    await logOut()
    await t.expect('foo').eql('foo','Check that ')  
})
