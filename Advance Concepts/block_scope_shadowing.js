// Block - combines multiple javascript statements together so that we can use it as a single statement

if(true){   // for multiple statements
    console.log("block")
    console.log(12);
}

if(true) console.log("single line statement") // single line statement does not require a block {}.

// Block Scope - variables and function that  are accessible inside the block

{
    const a =10;
    let b = 12; // block scoped
    var c = 33; // global scoped
    console.log(a)  // accessible 
    console.log(b)   // accessible
    console.log(c)   // accessible
}

// b and c are stored in the separate memory space.
// cant be accessed outside the block

// console.log(a);  // not accessible same for b
console.log(c);  // prints c


// Shadowing declaring variables again to change its value inside a block or in global scope.

var e=10;
let f =99;
{
    var e = 100;
    let f=9;
    const g=88;
    console.log(e) // 100
    console.log(f)  // 9
}
// use of var can be reflected here.
console.log(e); // 100 
// use of let is not reflected as it is block scoped (Same goes for const)
console.log(f); // 99

// Legal shadowing - 'var' can be shadowed using 'let'
{
    var a = 10;
    {
        let a = 100;
        console.log(a)
    }
    console.log(a)
}
// Illegal shadowing - 'let' cannot be shadowed using 'var'
{
    let a =500;
    {
        var a =90;
        console.log(a)
    }
    console.log(a)
}