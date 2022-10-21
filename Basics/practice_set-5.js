

let num = [1,2,3,4,5,6];
// sum of array
let a = num.reduce((e,j)=>{
    return e+j
})
console.log(a)

// add a number to an array

num.push(12);
console.log(num);

// divisible by 2
let c = num.filter((r)=>{
    return r%2==0
})
console.log(c);

let w = num.map((x)=> (
    x*x
))
console.log(w)
// factorial of array
let num2 = [1,2,3,4,5];
let v = num2.reduce((x,y)=>{
    return x*y
})
console.log(v);