let arr =[23,4,5,750]


// map method - It creates a new array by performing some operation on existing arrays unlike forEach method 
// which just iterate through the array. It accepts three arguments value,index,array

let z = arr.map((v,idx,arr)=>{
    return v/2 // operations performed
})
console.log(z) // stores the modified array

// returns undefined with forEach because it does not return any array
let y = arr.forEach((e)=>{
    return e/2
})
console.log(y);

// filter method - It iterates over an array and creates a new array from elements that pass a specific condition.

let w = arr.filter((v)=>{
    return v<10
})

console.log(w) // returns element elements less than 10

// reduce method - Returns a single value after performing an operation.
let arr2= [1,2,3,4,5]
let g = arr2.reduce((x,y)=>{
    let sum =  x+y
    return sum
})

console.log(g)