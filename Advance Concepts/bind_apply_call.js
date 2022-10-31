// Call Method - It is a predefined method with an owner object as an argument

let name ={
    firstName:'Bruce',
    lastName:'Wayne',
    // FullName:function(){   First way to do this
    //     console.log(this.firstName+' '+this.lastName);
    // }
}

let fullName = function(homeTown){
   console.log(this.firstName+' '+this.lastName+homeTown);
}

fullName.call(name,'Chandigarh');


let name2 = {
    firstName:'Captain',
    lastName:'America',
}

// Call Method - To Borrow a function from another object and use it with another data.
// or to attach a function to any object as its method. Borrowing of method from an object
// or borrowing an object 
// First Argument - the pointer(this) which is pointing to referred object.
// Second Argument -  arguments passed to the function separated by (,)
fullName.call(name2,'Punjab') // the first argument is to specify this keyword to which object it points to.
// name.fullName.call(name2) This is how we can use another function method.




// apply method : It is exactly the same as call method the only difference is that 
// the way we pass the argument.
// In this case we pass it as array.

fullName.apply(name,['Delhi'])



// bind method : It is used to bind a function to the object that we refer to and returns the function
// It does not directly call the method.
// it just returns the method to be called later
let newObj = fullName.bind(name2,'Rajasthan');

newObj() // returned function