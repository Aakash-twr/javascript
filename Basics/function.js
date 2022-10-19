// Function is a block of code which is executed whenever required.
// It is used to reuse a particular set of code on different inputs.
// functions is a heart of javascript as defined in the advance section.
// the inputs used in functions are known as parameters.
// the inputs which are send while calling a function is known as arguments.

function add(a,b){
    console.log(a+b);
    return a+b;     // value can be returned
}
const c = add(3,4);    // value returned is stored in the variable
console.log(c);  // prints the sum
add(1,2);

// Arrow function - It act as a variable which act as a function when invoked.

const sum = ()=>{
    console.log("hii");
    return 10;
}



let a = sum();   //  return value stored.
console.log(a);   // prints the value.