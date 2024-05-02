const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)        // filter can be used to apply constions and the result will return accordingly, Output => 
                                                    // [41, 51,  61, 71, 81, 91, 101]

console.log(newNums);


const ans = myNumers
                .map((num) => num * 10 )
                .map( (num) => num >= 40)
            

console.log(ans);

// output: [
//     false, false, false,
//     true,  true,  true,
//     true,  true,  true,
//     true
//   ]