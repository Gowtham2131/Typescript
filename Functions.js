"use strict";
function sum(x, y) {
    return x + y;
}
console.log(sum(100, 300));
//Optional parameter
function Greet(greeting, name) {
    return greeting + name;
}
console.log(Greet("welcome", "hello"));
console.log(Greet("Welcome"));
//Default function
function sample(Word1, Word2 = "hello") {
    return Word1 + Word2;
}
console.log(sample("sample", "world"));
console.log(sample("sample"));
