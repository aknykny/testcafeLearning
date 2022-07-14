import { ClientFunction, Selector } from 'testcafe';

fixture `Change Element Style`
    .page `https://devexpress.github.io/testcafe/example`;

test.only('Hide an element', async t => {
    await t.wait(1000)
    const populateButton     = Selector('#populate');

    const hidePopulateButton = ClientFunction(() => {
        document.getElementById('populate').style.display = 'none';
    });
    await t.expect(populateButton.visible).ok();
    await hideElement(populateButton,'hide');
    await t.expect(populateButton.visible).notOk();
});

test('Change header color', async t => {
    const header            = Selector('h1');
    const removeHeaderColor = ClientFunction(() => {
        document.querySelector('h1').style.color = '#111';
        header.style.color()
    });
    await t.expect(header.getStyleProperty('color')).eql('rgb(47, 164, 207)');
    await removeHeaderColor();
    await t.expect(header.getStyleProperty('color')).eql('rgb(17, 17, 17)');
});