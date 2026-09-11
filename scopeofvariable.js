"use strict";
function sampleVariables() {
    if (true) {
        var a = 100;
        let b = 101;
        b = 102;
        console.log(a);
        console.log(b);
    }
    console.log(a);
    // console.log(b) ---> ❌ let cannot be accessed outside the block
}
sampleVariables();
