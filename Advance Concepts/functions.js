var x =1;
a(); // prints 10
b(); // prints 100
console.log(x); // prints 1

function a(){
      var x = 10;  // re declaration of x and it is block scoped
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
