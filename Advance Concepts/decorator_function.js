// Decorator function: A function that act as a wrapper for another function to perform some standard operations.


// For example:

let calc = (length,width)=>{
    return length*width;
}

// decorator function
const countParams = (fn)=>{
  return (...params)=>{
      if(params.length!=fn.length){
          throw new Error('Incorrect');
      }
      return fn(...params)
  }
}


x = countParams(calc);
console.log(x(10,20))