fixture.meta("env","dev") (`meta data test suite`)
    .page(`http://zero.webappsecurity.com/index.html`)
    
test('test 1',async t=>{
    console.log('test 1 done')

})

test.meta({ key1: 'value1', key2: 'value2', key3: 'value3' })
    .page(`http://zero.webappsecurity.com/index.html`)
    ('test 2',async t=>{
    console.log('test 2 done')

})
test.meta('env','prod')
    ('test 3',async t=>{
    console.log('test 3 done')

})


// command is
// tcafeEdu % testcafe chrome tests/metadata.js --test-meta key1=value1

// note!!.. after meta specify the page