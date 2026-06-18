// // These are straightforward because both operands are numbers.
// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)

// For relational operators (>, <, >=, <=), JavaScript tries to convert strings to numbers.
console.log("2" > 1)    // 2 > 1 => true
console.log("02" > 1)   // 2 > 1 => true

console.log(null > 0)   // 0 > 0 => false   
console.log(null == 0)  // The == operator has special rules. JavaScript does NOT convert null to 0 here. It is loosely equal to undefined.  null == 0 => false
console.log(null >= 0); // 0 >= 0 => true

console.log(undefined == 0)    // undefined is loosely equal to null. undefined == 0 => false
console.log(undefined > 0)     // undefined converts into NaN. Any comparison involving NaN is false
console.log(undefined < 0)

// ===
console.log("2" === 2)      // strict equality =? checks both type and value
