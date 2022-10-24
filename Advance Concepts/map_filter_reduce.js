// Higher Order Function

// map - Returns a new array with modifications

const arr = [1,3,4];

const b = arr.map((i)=> i*i)

console.log(b); // prints new array with modifications

// filter - It filters out the elements which pass a specified condition and creates a new array.

const a = arr.filter((i)=>i%2==1) // 
console.log(a) // 1,3 (odd values)

// reduce - It basically operate on each and every element and return  a single value.
// it accepts two parameters - accumulator and current 
// accumulator is basically a storage to return a single value.
// current - stores each of the value of array

const d = arr.reduce((acc,curr)=> acc += curr)
console.log(d);

const obj = [
    {a:1},
    {b:2}
]

obj[0].a=10;
console.log(obj);