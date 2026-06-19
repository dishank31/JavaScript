const name = "Dishank"
const repoCount = 50

// console.log(name + repoCount + "Value")     // Not recommended

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('dishhankk')

// These are some methods you can go to console and see all the string methods
console.log(gameName[0])
console.log(gameName.__proto__)     // Use to see all the prototypes can be viewed in console.

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('k'))

const newString = gameName.substring(0,6)
console.log(newString);

const anotherString = gameName.slice(-4,4)
console.log(anotherString);

const newStringOne = "     dishank    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://dishank.com/dishank%20gandhi"

console.log(url.replace('%20', '-'))
console.log(url.includes("MatLab"));

const sentence = "The quick brown fox jumps over the lazy dog"
console.log(sentence.split(" ", 9));    // .split(seperator, limit)

/*
=====================================================
JAVASCRIPT STRING METHODS (INTERVIEW + PRODUCTION)
=====================================================

| Method          | Syntax                          | Purpose                          |
|-----------------|---------------------------------|----------------------------------|
| length          | str.length                      | Returns string length            |
| charAt()        | str.charAt(i)                   | Character at index               |
| at()            | str.at(i)                       | Character at index (supports -ve)|
| slice()         | str.slice(start, end)           | Extract part of string           |
| substring()     | str.substring(start, end)       | Extract substring                |
| indexOf()       | str.indexOf(value)              | First occurrence index           |
| lastIndexOf()   | str.lastIndexOf(value)          | Last occurrence index            |
| includes()      | str.includes(value)             | Checks if value exists           |
| startsWith()    | str.startsWith(value)           | Checks beginning                 |
| endsWith()      | str.endsWith(value)             | Checks ending                    |
| split()         | str.split(separator)            | Convert string to array          |
| trim()          | str.trim()                      | Remove spaces from both ends     |
| toLowerCase()   | str.toLowerCase()               | Convert to lowercase             |
| toUpperCase()   | str.toUpperCase()               | Convert to uppercase             |
| replace()       | str.replace(old, new)           | Replace first occurrence         |
| replaceAll()    | str.replaceAll(old, new)        | Replace all occurrences          |
| concat()        | str.concat(str2)                | Join strings                     |
| repeat()        | str.repeat(n)                   | Repeat string n times            |
| padStart()      | str.padStart(len, char)         | Pad characters at start          |
| padEnd()        | str.padEnd(len, char)           | Pad characters at end            |

*/