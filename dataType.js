let num1 = 10  //this Data type is Number
let num2 = "10" // this is a string data type
let isbool = true // this is a boolean data type
let isNull = null // this is a null data type
let isUndefined // this is an undefined data type


/*********************DATA TYPE CONVERSION*********************/


let num3 = num2;
console.log(typeof num3);
num3 = Number(num3); // converting string to number
console.log(typeof num3);



let str1 = String(num1); // converting number to string
console.log(typeof str1);



let bool1 = Boolean(num1); // converting number to boolean
console.log(typeof bool1);
console.log(bool1);
// let bool2 = Boolean(isNull); // converting null to boolean


num2 = "123abohar"
let num4 = Number(num2); // this will return NaN (Not a Number) because '123abohar' is not a valid number
console.log(num4); // Output: NaN
let str2 = String(isNull); // converting null to string
console.log(typeof str2); // Output: "null"
let str3 = String(isUndefined); // converting undefined to string
console.log(typeof str3); // Output: "undefined"



let bool2 = Boolean(isNull);
 // converting null to boolean
console.log(typeof bool2); // Output: "boolean"


console.log( bool2);
 // Output: "boolean"
let bool3 = Boolean(isUndefined); // converting undefined to boolean
console.log( bool3); // Output: "boolean"
let bool4 = Boolean(""); // converting empty string to boolean
console.log(typeof bool4); // Output: "false"
let bool5 = Boolean(" "); // converting space string to boolean
console.log( bool5); // Output: "true"
let bool6 = Boolean(0); // converting 0 to boolean
console.log( bool6); // Output: "false"
let bool7 = Boolean(1); // converting 1 to boolean  
console.log( bool7); // Output: "true"
let bool8 = Boolean(-1); // converting -1 to boolean
console.log( bool8); // Output: "true"