// Normal for loop

let num = [1,2,3,4,5]
// for(let i=0;i<num.length;i++){
//     console.log(num[i]);
// }

// forEach loop for arrays - a way to loop through the array other than normal for loop

num.forEach((ele)=>{
    console.log(ele);
})

// console.log(num);


// Array.from() - creates a array from any iterables like strings

let obj = "nothing"

console.log(Array.from(obj)) // return an array

// for-of loop

for(let x of num){
    console.log(x);  // array elements
}

// for-in loop

for (let x in num){
    console.log(x) // prints the index
}

