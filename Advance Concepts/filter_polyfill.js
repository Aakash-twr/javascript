const num = [2,3,4,6,8,10,13,1,17];


// filter function
const num1 = num.filter((f)=> f%2==0);
console.log(num1);

// Polyfill


Array.prototype.myFilter = function(cb){
    let temp=[];
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)) temp.push(this[i])
    }
    return temp;
}

const num3 = num.myFilter((f)=> f%2==0)
console.log(num3)