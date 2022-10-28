// Implementation of Promise

// A promise takes a callback function that accepts two parameters : resolve / reject
// If the operation is executed successful we can throw an indication with resolve.
// But if failed we can throw an error with reject.
// Major advantage of this promise implementation is that we can import this and can be used at 
// required places.



let flag = false;
function createOrder(){
    const pr = new Promise(function(resolve,reject){  // Promise function
         if(!flag){
            const err = new Error('Sorry')
            reject(err);
         }else{
            resolve({resolve:'done'})
         }
    })
    return pr;  // should be returned.
}

const promise = createOrder(); // Here the promise is returned in the form of object.

promise.then((data)=> console.log(data)).catch((err)=> console.log(err.message));




// If the promise is fulfilled, then() function is executed.
// If not, catch() block is used to throw an error which the reject sends it as a parameter.
// Promise can either be resolve or rejected.



// Promise Chaining - It is a method that allow us to perform multiple asynchronous tasks in a specific order.
let obey = true;
createBlog()
.then((data)=>{
   console.log(data);
   return data;
}).then((value)=>{
   return validation(value);
}).then((result)=>{
   console.log(result);
}).catch((err)=>console.log(err.message))
.then(()=>console.log('I am after the catch'))


function createBlog(){
   const pr = new Promise(function(resolve,reject){
         if(!obey){
            const err = new Error('There is an error');
            reject(err)
         }else{
            resolve('Success');
         }
   })
   return pr;
}

function validation(val){
   const pr = new Promise(function(resolve,reject){
      resolve(`${val} from validation`);
   })
   return pr;
}

// In this scenario, there is a nested promise in the chain such that we can return it down the chain 
// If any of the function face error it will be handled by the catch block.
// catch block any error which occur in any of its above chain

