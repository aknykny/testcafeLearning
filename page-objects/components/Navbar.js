import { Selector, t } from "testcafe";
import BasePage from "../pages/BasePage";

class Navbar extends BasePage{
    constructor(){
        //selectors
        super()
        this.searchBox = Selector('#searchTerm')
        this.signingButton = Selector('#signin_button')
    }
    async search(text) {
        await t
            .typeText(this.searchBox,text, { paste:true, replace:true})
            .pressKey('enter')
    }
}

export default Navbar
