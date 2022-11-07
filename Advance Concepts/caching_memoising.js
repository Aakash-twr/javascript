// Caching refers to storing the previous result in order to serve it later for optimization

// Memoization - A technique to reduce the processing time implementing caching


// It can be implemented using the concept of closures.

// Memoized function 

function memoize(fn){
    let res = {}
    return function(...args){
        var cacheStr = JSON.stringify(args);
        if(!res[cacheStr]){
            res[cacheStr] = fn.call(this,...args)
        }
        return res[cacheStr];
    }
}


// This function will take too much time to execute. So if the arguments passed to it will be same then 
// to reduce the processing time by caching the previous result is done my memoize function.
const previous = function(num1,num2){
    for(let i=0;i<100000;i++){}
    return num1*num2
}

const memoizeProduct = memoize(previous)

console.log(memoizeProduct(100,200))
console.log(memoizeProduct(100,200))