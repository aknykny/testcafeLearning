import { Selector } from "testcafe";

fixture("My Fixture")
    .page("https://www.globalplayer.com/live/capitaldance/uk/");

test('asa',t=>{
    const el=Selector('.image-with-fallback img')

})