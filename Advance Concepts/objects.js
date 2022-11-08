// An Object is a collection of properties and methods.

const obj = {
    name:'Warrior',
    "Want the name": 'Same'
}

obj.name='Survivor'  // Modify the property of object
// delete obj.name -- For deleting the property from the object

console.log(obj["Want the name"])


// Dynamic binding a property in object

const firstName='Bat'
const nickName='Wayne'

const obj2={
    [firstName]:nickName
}

console.log(obj2)

// Output Based
// const obj = {
//     a:100,
//     b:200,
//     c:'Wayne'
// }

// function multiplyNum(object){
//     for(let x in object){
//         if(typeof object[x]==='number'){
//             object[x]=object[x]*2
//         }
//     }
// }

// multiplyNum(obj);
// console.log(obj)

// Destructuring
let remain={
    name:'Farmer'
}
const {name:temp}= remain;
console.log(temp)

// nested destructuring

let demon = {
    name:'Happy',
    fullName:{
        first:'Vine',
        last:'Colon'
    }
}

const {fullName:{first}} = demon;

console.log(first)

// Object Referencing

let c = {key:'Nothing'}
let d;
d=c;   // passing the reference of the object c. (Not copying the values)
c.key='Always'
console.log(d.key)



console.log(d==c)   // both share same memory space
console.log({a:1}=={a:1})// return false (Both the object share different memory space)


// Passing by reference

const f = {number:10};

function calc(x={...f}){
    console.log(x.number*=2)
}

calc()  // copied object is passed
calc()
calc(f)  // passing the reference of the object
calc(f)  // same as above


// Cloning an object

const variable = {
    name:100
}
// 1st Method
const cloneObj = Object.assign({},variable);

console.log(cloneObj)

// 2nd method 

const anotherClone = {...variable}

console.log(anotherClone)