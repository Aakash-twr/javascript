var x =1;
a(); // prints 10
b(); // prints 100
console.log(x); // prints 1

function a(){
      var x = 10;   // re declaration of x and it is block scoped
    console.log(x);
}
 function b(){
    var x = 100;   // same as above
    console.log(x);
 }



// As we know x is declared using var, which has global scope so when it accessed globally it prints its initial value
// x declared in the function has block scoped as it is declared not re initialized.

// In case of re initialization ,
// the value of x will change globally.

// In case of arrow functions they behave differently . They behave as a variable if we want to access it.
// 

console.log(func)   // print undefined
var func = ()=>{
   console.log("arrow function");
}
console.log(func)   // prints the whole code.
func();  // execute the code inside function.

// Example -  Arrow VS Normal functions

const obj = {
   name:'Object',
   normal: function (){
      return this;
   },
   arrow: ()=>{
      return this;
   }
}


console.log(obj.arrow())  // points to the global object.
console.log(obj.normal())  // points to the current object.



// using "this" in both functions

function example(){
   return this;
}

const exampleTwo = ()=> {return this}

console.log(example());   // points to the global object (Parent)
console.log(exampleTwo());  // Could not 