// q.1 
let a = "fox"

// .includes() -  Returns True or False
console.log(a.includes('f'));

// .startsWith()
console.log(a.startsWith('f'));

// .endsWith()
console.log(a.endsWith('f'));

let b ="Happy Hour";
let amount = Number.parseInt(b.slice('Happy '.length)) // converts string into number
console.log(b.slice('Happy '.length)) // slicing the string from happy.
console.log(typeof amount) // prints the type of amount = number

let c = "Game";
let d = c[1]='e';
console.log(d)
console.log(c)