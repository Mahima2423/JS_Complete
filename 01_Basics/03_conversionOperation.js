// Conversion

let score ="33abc"

console.log(typeof score) // string
console.log(typeof (score))  //string

let valueInNumber = Number(score)
console.log(typeof valueInNumber);  // number
console.log(valueInNumber);         // NaN

// "33" => 33
// "33abc" => NaN
// true => 1, false => 0

let isLoggedIn = "mahima"

let booleanIsLoggedIn =Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)  //true

// 1 => true ; 0 => false
// "" => false ;  "mahima" => true

let someNumber =33

let stringNumber = String(someNumber)
console.log(stringNumber);          // "33"
console.log(typeof stringNumber);   // string


// ******************* Operations ********************

console.log(2+2)  // addtion
console.log(2-2)  // substraction
console.log(2*2)    // multiplication
console.log(2/2)    //division
console.log(2**3)   //power  => 8
console.log(2%3)    //remainder

let str1 ="hello"
let str2 = " mahima"

let str3 = str1 + str2  // "hello mahima"

console.log("1" + 2)  // 12
console.log(1 + "2")  // 12
console.log("1" + 2 + 2)  // 122
console.log(1 + 2 + "2")  // 32


console.log(+true);   // output => 1
// console.log(++true);  //error
// console.log(true+);   // error

console.log(+"");     // output => 0

let num1, num2, num3

num1 = num2 = num3 = 4

let counter = 100;
++counter 
console.log(counter);   //101
