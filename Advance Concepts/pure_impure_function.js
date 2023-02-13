// Impure Function - It mutates(change) the data;


function func(arr){
    arr.push(100);
    return arr;
}

const arr = [1,2];

const x = func(arr);
console.log(x)  // 100 added 


// Pure functions will not mutate the data.

// Advantages: -> Clean code, -> Easy to test,etc


