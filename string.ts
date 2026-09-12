var string1:string="Welcome"
var string2:string="home"
var string3:string ="hi"

//CharAt
 console.log(string1.charAt(1))

 //concat

 console.log(string1.concat(string2))
 console.log(string1.concat(string2).concat(string3))

 //Replace

 var str:string="Typescript Programming"
 console.log(str.replace('c','e'))
 console.log(str.replace('Type','java'))


 //split

 var fruits:string="apple orange grapes"
 console.log(fruits.split(' '))
 console.log(fruits.split(' ',2))
 console.log(fruits.split(' ',1))

 //substring

 var name1:string="Welcome"
 console.log(name1.substring(2,5))

 //length
 console.log(name1.length)

 //touppercase && tolowercase

 console.log(str.toLowerCase())
 console.log(str.toUpperCase())

 //trim

 var str3:string="   welcome    "
 console.log(str3.trim())
 console.log(str3.trimRight())
 console.log(str3.trimLeft())
