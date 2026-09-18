function sum(x:number,y:number):number{

    return x+y 

}
console.log(sum(100,300))

//Optional parameter

function Greet(greeting:string,name?:string):string
{

return greeting+name;

}
console.log(Greet("welcome","hello"))
console.log(Greet("Welcome"))

//Default function

function sample(Word1:string,Word2:string="hello"):string
{
    return Word1+Word2
}

console.log(sample("sample","world"))
console.log(sample("sample"))