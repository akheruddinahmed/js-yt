// Immediately Invoked Function Expressions (IIFE)

//Named IIFE
(function techno(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
//; is used for ending the statement to avoid issues when minifying or concatenating scripts

//()() --> first () function declaration , second () function invocation
// IIFE is used to create a new scope to avoid polluting the global scope,which means variables and functions defined inside an IIFE are not accessible from the outside.
// It is commonly used for initialization code that needs to run once when the script loads.

//unnamed IIFE || parameterized IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('akher')
