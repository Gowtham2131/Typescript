"use strict";
//find even number from array
var Num = [10, 15, 22, 33, 40, 55, 60];
for (var i = 0; i < Num.length; i++) {
    if (Num[i] % 2 == 0) {
        console.log(Num[i]);
    }
}
// to find ood number
console.log("Odd number");
for (var A in Num) {
    if (Num[A] % 2 != 0) {
        console.log(Num[A]);
    }
}
var largest = Num[0];
for (var b = 1; b < Num.length; b++) {
    if (Num[b] > largest) {
        largest = Num[b];
    }
}
console.log("largest number is " + largest);
