const num = [1,2,3,4,5];

// reduce function

const num1 = num.reduce((acc,curr,i,arr)=>{
    return acc = curr+acc
},0)

console.log(num1)

// polyfill


Array.prototype.myReduce = function(cb,initial){
    var accumulator = initial;
    for(let i=0;i<this.length;i++){
        accumulator = accumulator ? cb(accumulator,this[i],i,this):this[i]
    }
    return accumulator;
}

const num2 = num.myReduce((acc,curr)=>{
    return acc += curr
},0)

console.log(num2)