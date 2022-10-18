// Loops

// Execution of a particular set of code number of times until a condition is met

// 1 . For Loop 

 //initialization; condition; increment/decrement
for(let a = 0;a<2;a++){  // works same as in other programming language
    console.log(a);
}

// 2. For in loop - used for objects or we can say that the datatype with key-value pairs or json objects

let obj = {
    apple:12,
    mango:56,
    banana:90
}

let obj2 = {
    a:{
        c:12,
        d:23,
    },
    c:{
        f:56,
        g:78
    }

}

for(let x in obj2){  // traversing a json object
    console.log(obj2[x])
}

// 3. For of Loop works for iterables like arrays, array of characters

const arr = [  // array of objects
    {
        a:2
    }
];

for(let a of arr){  // syntax
    console.log(a);
}
