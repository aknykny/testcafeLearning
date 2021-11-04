import { login, logOut } from "./helper";

fixture (`New Payee`)
    .page(`http://zero.webappsecurity.com/index.html`)

test.before(async t=>{await login('username','password')})('Payee test', async t =>{
    //action code goes here
    await logOut()
    await t.expect('foo').eql('foo','Check that ')  
})
