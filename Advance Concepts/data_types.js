// Primitive data types :

// Boolean, Number,String, undefined etc...


// Structural 

//Object: Object, Array, Map,Set etc..



// Primitives pass values && Structural pass reference

// In case of primitives:

let x=2;
let y = x;
y+=1000;
console.log(x);
console.log(y);

// in case of Structural
let a = [1,2,3];
let b = a;
b.push(100);
console.log(a);
console.log(b);


// Mutable Vs Immutable

let myName = "Dave";
myName[0]="W";
console.log(myName);  // Primitives are immutable

b[0]=20;
console.log(b);   // structural are mutable
console.log(a);   // structural are mutable


