// Primitive => 7

// 7 types : Number, string, Boolean, null, undefined, symbol, BigInt


var score = 100       //number
var score = 100.3     //number

const myString = "mahima"  //string
const isLogged = false      // boolean
const temp = null       //null
let name ;        //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);     // false

const bigNum = 34527865484564567845456789n   //bigint
console.log(typeof bigNum)

// reference (Non primitive)

// Array, Object, Functions

let heroes = ["shaktiman", "superman" , "spiderman"];
console.log(typeof heroes);

let obj = {
    name: "mahima",
    age: 24,
}

const myfun = function() {
    console.log("hello world");
}

/*    Datatype          Return Type
    1. number           number
    2. string           string
    3. bigint           bigint
    4. null             object**
    5. undefined        undefined
    6. symbol           symbol
    7. boolean          boolean
    8. array            object**
    9. object           object
    10. function        function**

*/

// Memory => Stack-> Primitive datatypes  ,  Heap-> Non-Primitive

let myName = "mahima"
let myAnotherName = "mahima"

myAnotherName = "harshit"
console.log(myName);            // mahima
console.log(myAnotherName);     // harshit

let obj1= {
    name : "sara",
    age : 24,
};

let obj2 = obj1
obj2.name = "hetal"

console.log(obj1.name)      // hetal
console.log(obj2.name)      // hetal


// Stack -> we get the copy of the original value
// Heap -> we get the reference of the original value