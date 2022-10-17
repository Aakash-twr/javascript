// 1:
let a = "Game";
let b = 67;
// console.log(typeof (a+b)); // while working with strings, if string and integer are sum up, they perform concatenation
//2:
const obj = {    // obj is basically a reference to this object. So the object keys can be re assigned.
    alpha:"farmer",
    beaten:56,
    kings:true
}
// obj = 45;      // not allowed constants cannot be updated
obj['canteen']=789 // new items can be added like this
obj['kings']=46; // can be re assigned
obj.alpha="rain"; // can be accessed like this with dot(.).
// console.log(obj.beaten);

//3:
