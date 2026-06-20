const score = 400
console.log(score)

const balance = new Number(100) // Specifically defining that it is a number
console.log(balance)

console.log(balance.toString().length); // converting the number into string
console.log(balance.toFixed(1))

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4))

const hundreds = 1000000
console.log(hundreds.toLocaleString())  // International number system
console.log(hundreds.toLocaleString('en-IN'))   // Indian number system

// +++++++++++++++++++ Maths ++++++++++++++++++++++++++++

console.log(Math)   // In-built library in JS
// To get more info write it on console

// Popular one
console.log(Math.abs(-4))
console.log(Math.round(4.6));
console.log(Math.ceil(3.9))
console.log(Math.floor(8.4));

let nums = [4, 7, 11, 2, 8]
console.log(Math.min(nums));    // NaN
console.log(Math.max(nums));    // NaN
// This will not work as JS expect (4,7,11,2,8) but u are passing the whole array
// so it tries to convert the array into numbers

// Instead you should pass like this
console.log(Math.min(...nums))  // ... this is spread operator which spreads the array so that we get desired result
console.log(Math.max(...nums))

console.log(Math.random())  // 0-1
console.log((Math.random() * 10) + 1)       // To get the values from 0-9
console.log(Math.floor(Math.random() * 10) + 1);    // Values between 1-9

const min = 10
const max = 20

// Important
console.log(Math.floor(Math.random() * (max - min + 1)) + min)