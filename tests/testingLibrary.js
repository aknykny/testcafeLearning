// testing library
// Testcafe Testing Library
    // npm install --save-dev testcafe @testing-library/testcafe

// Add the following to your .testcaferc.json file:

    //   "clientScripts": [
    //     { "module": "@testing-library/dom/dist/@testing-library/dom.umd.js" }
    //   ],

    import {screen} from '@testing-library/testcafe'
    fixture('testing library')
        .page('./test-app/index.html')

    test('getByPlaceHolderText', async t => {
      await t.setTestSpeed(0.5)
            .typeText(
        screen.getByPlaceholderText('Placeholder Text'),
        'Hello Placeholder',
      )
    })
    test.only('getByText', async t => {
      await t.setTestSpeed(0.2)
      console.log(await screen.getByText('Button Text1').innerText)
      console.log(await screen.getByText('getByText').innerText)

    })
    
    test('getByLabelText', async t => {
      await t.setTestSpeed(0.2)
            .typeText(
        screen.getByLabelText('Label For Input Labelled By Id'),
        'Hello Input Labelled By Id',
      )
    })
    
    test('queryAllByText', async t => {
      await t.expect(screen.queryAllByText('Button Text').exists).ok()
      await t
        .expect(screen.queryAllByText('Non-existing Button Text').exists)
        .notOk()
    })