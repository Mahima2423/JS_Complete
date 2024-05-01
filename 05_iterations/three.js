// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}


// let mp = new Map();
// mp.set('name', "Mahima");
// mp.set('class', "learning");

// for(const [key,value] of mp)     // this way we can get key and value both, try with key only without square brackets
// {
//     console.log(key);
// }

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {         // this will give error as objects are not iterable using for of loop
//     console.log(key, ':-', value);
    
// }


let obj2 = {
    name : "mahima",
    class : "learning",
    school : "self motivation"
};

// for(const [key, value] of obj2)           // this will give error as objects are not iterable using for of loop
// {
//     console.log(key);
// }

