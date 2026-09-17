//for(intilization;condition;inc/dec)

for(var i:number=1;i<=10;i++){

    console.log(i)
}


for(var j:number=10;j>0;j--){

    console.log(j)
}

//even number
console.log("Even number")
for(var a:number=2;a<=10;a+=2){
    console.log(a)
}

for(var a:number=1;a<=10;a++){

    if(a==5){
        break;
    }
    console.log(a)
}

console.log("continue")
for(var b:number=1;b<=10;b++){

    if(b==5){
      continue;  
    }
    console.log(b)
}