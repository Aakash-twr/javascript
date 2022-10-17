
// Variables

var a = 10;  //  (used in older versions)
var a = "Hello"   // re-declared or re initialized
{
    a="sorry" //  inside a block.
}
// console.log(a);

let b =7;  // used in ES5 onwards
b="I am let"; // updated

{
    let b="I m in the block";
    // console.log(b)
}

// console.log(b);

const d = "Harry" // const variable
// d=12;   const cannot be updated
// console.log(d);

// Primitive datatypes

let r = null // null
let c = 24; // integer
let e = true // boolean
let f = BigInt("126727"); // big integer
let g = Symbol("I am a symbol"); // symbol
let h = "John";  // string
// console.log(r,c,e,f,g,h);

// Non Primitives

const objc = {    // objects are non primitive datatypes.
    ad:"great",  // They store data in key value pairs.
    harry:17,
    bc:true
}
console.log(objc['ad'])