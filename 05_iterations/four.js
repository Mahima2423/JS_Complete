const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {         //Maps are not iterable
//     console.log(key);
// }


// const arr = [1,2,3,4]

// for(const i in arr)
// {
//     console.log(arr[i]);
// }

// const mp = new Map();            
// mp.set('name', "mahima");
// mp.set('class', "learning");
// mp.set('school', "self motivation");

// for(const key in mp)         //Maps are not iterable
// {
//     console.log(mp[key]);
// }