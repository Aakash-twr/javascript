// this keyword - It is used in a function , refers to the object to which it belongs to.
// It nevers points to a function.
// It points to the current object if it is inside it and points to the window object instead.

const person ={
    name:'Captain',
    sayMyName:function(){
        console.log(this.name);
    }
}
person.sayMyName(); // Implicit Binding

// Implicit Binding - At the time of function calling we know the value of output.
// Invoking a function using dot(.) notation.


globalThis.name ='super' // In this way we can access name in default binding
function sayMyName(){
    console.log(this.name);
}

sayMyName.call(person); // explicit Binding

// Explicit Binding - We don't have any idea about the result.

sayMyName(); // default binding



