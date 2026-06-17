let score = "33"
// score = "33abc"
// score = null
// score = undefined
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log (valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1, false => 0

let isLoggedIn = 1      // true
// isLoggedIn = ""      // false
// isLoggedIn = "Dishank"   // true

let boolenaIsLoggedIn = Boolean(isLoggedIn)
console.log(boolenaIsLoggedIn)

let someNumber = 33
let stringNumber = String(someNumber)

console.log(typeof stringNumber)
console.log(stringNumber);

// ****************** Opeartions ******************

let value = 3;
let negValue = -value
console.log(negValue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)
console.log(2/3)
console.log(2%3)

let str1 = "Hello"
let str2 = " Dishank"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

// These type of tricky codes you should avoid
console.log(+true)
console.log(+"")

let num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;      // Postfix and Prefix
++gameCounter
console.log(gameCounter);