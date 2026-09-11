var a=99 // global variable
function sampleVariables()
{
    if(true){

        var a=100
        let b=101
        b=102 // value can be reassigned 
        const c=1000
        //c=1001 --> The value can be reassigned
        console.log(a)
        console.log(b)

    }
     console.log(a)
// console.log(b) ---> ❌ let cannot be accessed outside the block

}
sampleVariables();