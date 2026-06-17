"use strict";       // treat all JS code as newer version

// alert(3+3)  // we are using nodejs, not browser
// if we write the above syntax in console we will get an output 

console.log(3 
    + 3)  // dont write like this, readability matters

let name = "Dishank"
let age = 21
let isLoggedIn = false
let temp = null  // We cannot write 0 as it 0 can be considered a temp and we need an undefined value because we didnt receive temp

// number => 2 ^ 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

// object

console.log(typeof("Dishank"))
console.log(typeof age)
console.log(typeof undefined);  // undefined
console.log(typeof null);       // object

x = "The answer is" + 42
y = 42 + " is the answer"
z = "37" + 7