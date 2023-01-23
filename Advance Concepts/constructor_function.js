// A constructor function is just a function that creates objects and initializes an object instance of class.

function Person(name){
    this.name = name;
}

const a = new Person('Hello');

console.log(a.name);


// difference factory VS Constructor function is just a new keyword used here.