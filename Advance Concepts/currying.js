// A technique by which we can transform a parameterized function 
// into several functions with single argument.

function sum(a,b,c){
    return a+b+c;
}

// Using the concept of closure

function curry(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a,b,c);
            }
        }
    }
}

let curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3));

// By using a bind() method
 let multiplyEvery = sum.bind(this,2,3);
console.log( multiplyEvery(5))


// Simple example of closure
let doSum = function(x){
    return function(y){
        console.log(x+y);
    }
}

const z = doSum(1);
z(2);

// Example

// evaluate('sum')(2)(4)  - output -6

function evaluate(operation){
    return function(a){
        return function(b){
            if(operation=='sum') return a+b
            else if(operation=='multiply') return a*b
            else return "Invalid"
        }
    }
}

console.log(evaluate('sum')(2)(4));


// Infinite Currying

function infinite(a){
    return function(b){
        if(b) return infinite(a+b);
        else return a;
    }
}

console.log(infinite(2)(3)(4)(5)(9)());


// Currying in DOM Manipulation

// See in web folder


