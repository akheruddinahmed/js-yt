const accountId = 123
let accountEmail="akheruddinahmedcse@gmail.com"
var accountPassword="123"
accountCity="Guwahati"
let accountState

// accountId = 12345 //not allowed
console.log(accountId);
accountPassword = "1234"
accountCity="Bongaigaon"

/*
prefer not to use var
bacause of issue in block scope and functional scope
*/

console.table([accountId,accountPassword,accountEmail,accountCity,accountState])
