var myArray:number[][]=[ 
    [10,20],
    [30,40],
    [50,60]
]

console.log(myArray)

for(var i=0;i<myArray.length;i++){

    for(var j=0;j<myArray[i].length;j++){

        console.log(myArray[i][j])
    }
}

console.log("reading the index using in operator")

for(var k in myArray){

for(var l in myArray[k]){

    console.log(myArray[k][l])
}
}
