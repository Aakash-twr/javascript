
// undefined is a special keyword which is assigned to every variable in the memory space before initialization.
// not defined is basically an error or warning thrown by javascript engine when we try to access a variable which
// is not present in the memory space.


console.log(a); // undefined
var a = 10;
console.log(a); // a = 10;
// console.log(x) // throws an error of not defined

//Javascript is a loosely typed language. What does that mean ??

// let us consider an example 

var a;  // undefined
a = "string" // string
a=12   // number
a=false  // boolean

// variable can be assigned with any datatype so that it is flexible also.