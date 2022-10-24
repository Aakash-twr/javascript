function x(){
    console.log('x');
}

function y(x){
    x();
}

y(x);

// Higher Order function - The function which accepts another function as parameter .

// Example:-
const radius = [1,2,3];

const area = (r)=>{
    return 3.14*r*r;
}
const circum = (r)=>{
    return 2*3.14*r
}

const calculate = function(radius,logic){
    let output = [];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));  // this points to the radius
    }

    return output;
}

// Used as Map implementation
Array.prototype.calculate = function(logic){
    let output = [];
    for(let i=0;i<this.length;i++){
        output.push(logic(this[i]));
    }

    return output;
}

const a = radius.calculate(area);
const b = calculate(radius,area);
console.log(b);
console.log(a);