// Lets us first understand Primitives and Objects

// Primitives are numbers, boolean, strings etc.

// Primitives :
 
const a = 12   // number
const b = 'Hello'  // string
const c = true   // boolean

// Objects is a separate category that includes plain objects, arrays, functions etc

const obj = {   // plain objects
    name:'I am object'
}

const arr = [1,2,3]  // arrays


// Values - all primitives are pass by value that means every time a new copy is created.

let x = 1
let y = x+3;

console.log(x);
console.log(y);
console.log(x);


// References - When we create an object and assigns to other . Both of the variables have same object
// addresses.


let j = {
    name:'I am J'
}

let h = j

h.name='I am H';  // Change is done to the same memory address

console.log(j);
console.log(h);




// Values Vs References

const v = 1;
const z = 1;
console.log(v==z)  // True. (In case of Primitives)


const d = [1]
const e = [1]

console.log(d===e)   // false (In case of Objects)