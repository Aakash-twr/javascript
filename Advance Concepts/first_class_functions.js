// function statement 
a();
function a(){
    console.log("function statement");
}

// function expression 
// b() cannot be invoked 
// console.log(b)
var b = function(){
    console.log("function expression")
}

// The major difference is Hoisting as in function statement we can call the function before its declaration
// But in case of function expression the whole function is assigned to a variable.
// so as we know during memory creation phase all the variables are assigned "undefined".
// So thats why is cannot invoke that function and throws an error.

// Anonymous function - function without a name. It can be used as values

// function(){  // should have a name

// }

// named function expression

var c = function d(){
    console.log("Named function expression")
    // console.log(d); can be accessed
}
// d() throws an error. Hence cannot be accessed
c();

// First Class Functions The ability of functions to be used as values.
// or we can say that function can be passed as an argument to another function.
// also can be return from a function

function z(param){
    param();
}

function xyz(){
    console.log("First class function");
}
z(xyz)





