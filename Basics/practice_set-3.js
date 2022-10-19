//q.1

let marks ={
    harry:23,
    man:45,
    info:56,

}

// Object.key() will give us all the keys in the form of array of strings. [ 'harry', 'man', 'info' ]
// console.log(Object.keys(marks));      
// console.log(Object.keys(marks).length);  // This is how we can calculate the size of object.
// console.log(Object.keys(marks)[1]); // This way we can access the array elements one by one.

for(let i=0;i<Object.keys(marks).length;i++){
    console.log(Object.keys(marks)[i]);
    console.log(marks[Object.keys(marks)[i]]);
}
// q.2 

for(let x in marks){
    console.log(x); // keys
    console.log(marks[x]); //values
}

const arr = Object.keys(marks);
console.log(arr); // array is printed
console.log(arr[0]) // access the element of array
