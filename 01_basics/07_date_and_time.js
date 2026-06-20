let myDate = new Date()

// console.log(myDate)     // Not at all readable - pain point
// console.log(myDate.toString())  // Readable format
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())

// Important
console.log(typeof myDate)

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("2023-01-14")  // YYYY-DD-MM
console.log(myCreatedDate.toLocaleString())

// We can explore more methods defined in Date 

let myTimestamp = Date.now()
console.log(myTimestamp);   // Not at all readable

// IMPORTANT
myDate.toLocaleString('default',
    {
        weekday: "long",
        timeZone: "Intl"
    }
)