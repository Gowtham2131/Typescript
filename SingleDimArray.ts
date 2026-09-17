var fruits:string[]=["apple","orrange","Grapes"]

console.log(fruits)

//*********** another method */

var fruits2:Array<string>=["apple","orrange","Grapes"]
console.log(fruits2)

console.log(fruits2[0])
console.log(fruits2[1])
console.log(fruits2[2])
console.log(fruits2[3]) // undefined

var values:(string|number) []= ["apple",20,"orange",50,"grapes"]
// or
var values1:Array<string|number>= ["banana",200,"orange",50]

console.log(values)
console.log(values1)

// using loop i can print all the array values

console.log("print the values in loops")

for(var i=0;i<values.length;i++){

    console.log(values[i])
}

for(var k in values){

    console.log(values[k])
}