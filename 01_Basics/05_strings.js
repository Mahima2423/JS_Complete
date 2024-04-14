const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + " Value");  // old method

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);    // new and better way

const gameName = new String('hitesh-hc-com')   // one more way of creating a string

console.log(gameName[0]);       // h
// console.log(gameName.__proto__);


console.log(gameName.length);       // 13
console.log(gameName.toUpperCase());       // returns a string in all upper case, does not change the original string  --> string is a primitive data type stored in stack, thus a uppercse copy will be created.
//HITESH-HC-COM

console.log(gameName.charAt(2));    //t
console.log(gameName.indexOf('t'));     // 2

const newString = gameName.substring(0, 4) /// substring function does not respect negative index  -> hite

console.log(newString);     //hite

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))    // https://hitesh.com/hitesh-choudhary

console.log(url.includes('sundar'))   //false

console.log(gameName.split('-'));      // [ 'hitesh', 'hc', 'com' ]