// let and const declarations are hoisted.
console.log(b); // prints undefined (Hoisting)
console.log(a); // Reference error: cant able to access
let a =10;
var b =20;

// We could'nt able to access let before initializing it. Here comes the concept of Temporal Dead Zone.
// As we know when the code is executed an execution context is created and the (var) is allocated memory in global space
// and assigned a keyword "undefined" But in case of let it is not allocated memory in the global space.

// The phase between it is allocated space and it get initialized is called Temporal Dead Zone.
// There is a separate space to store let and const other than global space

// Reference Error : If we try to access a variable that is not present in the memory space.

// Syntax Error : If there is any syntax which is wrong.
// const d;

// Type Error : If there is change of type:
const c = 10;
c=15; 
