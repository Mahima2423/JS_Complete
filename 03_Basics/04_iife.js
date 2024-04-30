
// Immediately Invoked Function Expressions (IIFE)
//Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// IIFE function do not know where to end, so use semicolons to end the execution of IIFE function

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
