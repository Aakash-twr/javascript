// ** Hoisting means accessing variables and functions before initializing it. ** //
// During Memory creation phase, Javascript engine moves the variable and function 
//declaration on top of code.

// getName();            // This will execute the function
// console.log(x);       // this will print special keyword "undefined" 
// console.log(getName); //This will print the whole function code.

// This happens because during memory creation phase the variables are initialized with "undefined"
// But in case of function it stores the whole code.

var x = 17;

function getName(){
  console.log("Hello");
}


// console.log(x); // This will print actual value of x variable
// getName();  // This will execute the code inside the function

console.log(getAnother) // this will print undefined as the arrow functions act like variables
// Arrow functions are treated as variable when tried to access it like variables.
// But function calling works the same.


var getAnother = ()=>{   // this function stores its to the variable name "getAnother"
    console.log("i am arrow function");
}
