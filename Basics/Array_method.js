let a = [1,2,3,4,7];

// toString Method
let b = a.toString();  // converts array into string
console.log(b)


// join method - joins the specified character after every element in the array.

let c = a.join('_'); // 1_2_....so on.
console.log(c);

// Modification in the original array Methods

// pop method - Pops out the last element from the original array.

console.log(a.pop()) // returns the popped element

console.log(a); // modified array

// push method - modifies the  original array and increases the added element at the end

console.log(a.push(78)); // return the length

console.log(a);

// shift - modifies the original array by removing the first element ans returning it

console.log(a.shift()); // removes the element from the start

// unshift - Adds element at the start and return the new length

console.log(a.unshift(234)); // return the new length of array by adding the element at start

