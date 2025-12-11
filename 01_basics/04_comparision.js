// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); //false
console.log(null == 0);//false
console.log(null >= 0);//true
console.log(null==undefined);//true
/*
For <, >, <=, >= → null becomes 0

For == → null only equals undefined
*/

console.log(undefined == 0);// false
console.log(undefined > 0);// false
console.log(undefined < 0);// false

/*
undefined is only equal to null, not equal to any number.

When using < or >, JS tries to convert values to numbers.

undefined converts to NaN.
undefined → NaN
NaN > 0 → false
All comparisons with NaN return false.

*/

// === 

console.log("2" === 2); //false