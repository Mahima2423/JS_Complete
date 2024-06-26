const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);   // this keyword works fine inside object
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);                // output => {}

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);      // here this will refer to global object and this.username will be undefined
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);      // here this will refer to global object and this.username will be undefined
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);                  // here this will **not** refer to global object  => Output {} and this.username will be undefined
}


 chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()