const num = [1,2,3,4,5];

// map function

const num2 = num.map((t)=>t*2);
console.log(num2);

// Polyfill

Array.prototype.myMap= function(cb){
    let temp=[];
    for(let i=0;i<this.length;i++){
        temp.push(cb(this[i],i,this));
    }
    return temp;
}

const num3 = num.myMap((t)=>t*2);
console.log(num3)