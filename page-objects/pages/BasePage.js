import { Selector,t } from "testcafe";
class BasePage{
    async waitFor(miliseconds){
        await t.wait(miliseconds)
    }
    async setTestSpeed(speedLevel){
        await t.setTestSpeed(speedLevel)
    }
    
}

export default BasePage