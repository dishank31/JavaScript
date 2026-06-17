const accountId = 14453     // If declared with const we cannot change the value of the variable
let accountEmail = "reynapatel35@gmail.com"
var accountPassword = "25632"   
/*
Prefer not use var 
because of issue in block scope and functional scope
*/
accountCity = "Surat"   // Not preferable to use
let accountState;

// accountId = 2  // Not allowed

accountEmail = "dishank@gmail.com"
accountPassword = "52411542"
accountCity = "Pune"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); 