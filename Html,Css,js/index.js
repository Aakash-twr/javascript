// Window Object

console.log(window) // Global object
// window.alert("Man")

// document object used to manipulate elements of our page

document.body.style.background="gray"

let a = prompt("Enter your age");
let age = Number.parseInt(a);

if(age>18){
    document.body.style.background='yellow'
}else{
    alert("You cannot drive");
}