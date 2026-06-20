// Primitive Datatypes: They store single value directly and are immutable.
// These are of 7 types: Number, String, Boolean, BigInt, Symbol, null, undefined

// Reference (non-primitive)
// Arrays, Objects, Functions

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

const id = Symbol("123")    // Symbol is used to make the values unique
const anotherId = Symbol("123")
console.log(id === anotherId)

const heros = ["shaktiman", "nagraaj", "doga"]  // Array representation
let myObj = {
    name: "Dishank",
    age: "21",
}

const myFunction = function()
{
    console.log("Hello Word")
}

console.log(typeof heros)
console.log(typeof myFunction)  // For function the type is named as object function


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stacks - (Primitive),    Heaps - (Non-Primitive)
// In stacks we pass by values or we use a copy of variable. (Changes in the value are done in copy of the variable)
// In heaps we pass by reference or we give the original address where the value is stored. (Changes in the value are done in original address of the varible)

let thisrepo = "JavaScript Learnings"

let anotherRepo = thisrepo
anotherRepo = "Porjects Using JS"

console.log(thisrepo)
console.log(anotherRepo);

let UserOne = {
    email: "dishank@gmail.com",
    pass: "253yyGdsod"
}

let UserTwo = UserOne

UserTwo.email = "reyna@yahoo.com"

console.log(UserTwo.email)
console.log((UserOne.email));

