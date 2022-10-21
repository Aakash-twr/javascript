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




