// Closure  - Function bundled together with its lexical scope forms a closure.

function y(){
    var a = 10;
    function c(){
        console.log(a);
    }
    return c;
}
const z =y();  // prints 10
// console.log(z); // prints the whole function that is returned
z();  // function invoked which was returned.

// z contains the whole function with its lexical scope.

// Advantages

// They provide data encapsulation.
// //They allow you to attach variables to an execution context.
// Variables in closures can help you maintain a state that you can use later.
// They provide data encapsulation.
// They help remove redundant code.
// They help maintain modular code.


