// A constructor function is just a function that creates objects and initializes an object instance of class.

function Person(name){
    this.name = name;
}

const a = new Person('Hello');
a.name='Nothing'  // Only in Constructor not in Factory Functions

console.log(a.name);


// difference factory VS Constructor function is just a new keyword used here.
                    // (Deep Copy)
// Factory function creates separate memory space of each of its instantiation.
// i,e copying the properties to a new instant in separate memory space.
// Changes done on any instance of it does not reflect to others.