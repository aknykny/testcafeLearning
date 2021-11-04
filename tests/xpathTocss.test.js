import LoginPage from './pages/LoginPage'
import Navbar from './pages/Navbar'

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
