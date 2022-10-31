// Prototype - Every object and function in Js has a build in property called prototype which
// itself is an object.
// It is used to share properties and methods across instances of the function.
// Adding new properties to an function later , can be done by attaching properties that are being shared
// among all the instances of that function.

function Person(fName,lName){ // This is a constructor function
    this.fName=fName
    this.lName=lName
}

const person1 = new Person('Bruce','Wayne');
const person2 = new Person('Captain','joker');

// person1.getFullName = function() {    // attaching new method to an instance of another function.
//     return this.fName + ' ' + this.lName;
// }

// console.log(person1.getFullName())  // this property is attached to only one instance of the function. ie, person1.


// To attach a property that will be valid to all the instance of the function, Prototype concept comes in.

Person.prototype.getFullName = function(){  // This is how we attach a property to all of the instance 
    return this.fName + ' ' + this.lName    // of the function.
}

Person.prototype.gadget = function(){   // Attaching methods
    return 'Gadget';
}

Person.prototype.family = 'Family'  // attaching properties
console.log(person1.getFullName());    // This showcase the use of prototype in javascript
console.log(person2.gadget());
console.log(person1.family);



Function.prototype.myBind=function(){
    console.log('Polyfill')
}

function fun(){
    console.log('No')
}

// All of the functions can access this myBind function
fun.myBind()