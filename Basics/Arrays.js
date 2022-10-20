// Arrays are used to store multiple values.

let a = [1,2,3,4]; // syntax of array.

console.log(a[0]); // accessing values

let b = ['array',67,89.6,true] // can be stored different types of value

console.log(b[2])

// .length property as same as string to calculate the size of array

console.log(b.length) // prints 4

b[4]=34; // adding new value
console.log(b.length)  // size increases

b[0]=678;  // changes the element of array - They are not immutable - They can be changed
console.log(b[0]);

console.log(typeof b);  // object

for(let i=0;i<b.length;i++){ // loop through the array
    console.log(b[i]);
}

for(let x of b){   // another way
    console.log(x);
}