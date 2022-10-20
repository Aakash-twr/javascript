// delete operator - Deletes the array element but not affect the length of array.

let a = [1,2,3,4,5];
delete a[0]; // element deleted but space is occupied
console.log(a) // prints - [ <1 empty item>, 2, 3, 4, 5 ]
console.log(a.length) // length is 5 Only.

// concat - Merges two arrays but original array be the same

let b = [12,3];
let c = [45,67];
let d = b.concat(c,a);
console.log(d);


// sort - sort the array alphabetically and modifies the original array also

let e = [5,4,3,1];
// e.sort();
console.log(e);

const compare = (a,b)=>{
    return a-b;      // ascending order ------->(b-a) for descending order<----------------
}

e.sort(compare);
console.log(e);
// We can also specify comparator function such that we can sort on the basis of it.

// reverse - reverses the array and changes the original array

e.reverse();

console.log(e)


// splice - Used for Add,Removal both in the same method, return the removed value and modifies the original array

// splice(start_Index,no_of_elements_to_remove,__,__,__,__..elements to be added)

let f = [1,2,3,4,5,6];
f.splice(2,3,908,876,123);
console.log(f);

//slice - creates new array and cuts out from the array.

console.log(f.slice(0,3))  // 0 to n-1