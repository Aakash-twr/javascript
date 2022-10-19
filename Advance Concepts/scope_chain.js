function print(){ // parent of c function
   c();
   function c(){  // child function
    console.log(a); // can access the variable (a) because function (c) can access its local memory space and 
                    // it parents lexical environment.
   }
}

// First the function c is executed and tries to find (a) in its lexical environment of its parent ie, 
//print() then print() function tries to find in its lexical environment of parent ie,global.

var a = 10;
print();
// console.log(a) // throws not defined
// Scope - A scope is a place where the variables are accessible to a function.

// Lexical environment - Local memory along with lexical environment of the parent.


