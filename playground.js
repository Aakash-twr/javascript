


function sum(a,b){
    return a+b;
}

function curr(sum){
    return (a)=>{
        return (b)=>{
           return sum(a,b);
        }
    }
}

const x = curr(sum)(10);

console.log(x(100))
console.log(x(200))
console.log(x(300))