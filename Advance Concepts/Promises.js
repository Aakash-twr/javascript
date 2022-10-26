// // Promises are used to handle async operations.

// const cart = ['shirt','shoes','jeans'];

//  createCart(cart,function proceed(orderId){
//     proceedToPay();
//  })

// // This is basically a case when we want to call function asynchronously
// // In this scenario, as the order is created by the createCart function then we want to call 
// // the proceedToPay call-back function.
// // But there is a problem we don't have control over this code whether it will be executed on time or 
// // how many times it times it will be executed. We are just passing the responsibility of proceedToPay function to the 
// // other function.
// // The problem is known as inversion of control.

// // To resolve this issue the concept of Promises comes in.

// const promise = createCart(cart); // This can be considered as promise.

// // Let say, initially the promise object will contain empty object like {data:undefined};
// // This function will return us a promise such that it will get us the data.
// // So by the meantime remaining code get executed.
// promise.then(()=>{
//     proceedToPay();
// })
// As soon we get the data as {data:orderDetails}.
// .then() is executed which basically takes a call-back function and it invoke the function as soon as
// we get the results.

// This way the Promises works

// Advantage :
// 1. We got the control over the programs as the createCart will just get us the data.
      // after that we can execute the required piece of code using .then() method

// Actual Implementation

const api = 'https://api.github/users/adarsh4567';

const user = fetch(api);  // fetch is a web api provided by browser and it returns us a promise
// As we discussed before the object will initially contains undefined until the promise is not
// fulfilled.

console.log(user);
// initially the user will store the promise object it looks like:
//{ status:pending,result:undefined}
// We can say that the promise is in pending state
// Promise object can have three states : pending, fulfilled, rejected


user.then(()=>{
    console.log('Got the result');
})

// As soon as fetch() function get us the data, .then() method will automatically execute the call-back
// function which is defined or passed into it.
// state changes to 'fulfilled'

// Promise - It is an object representing a eventual completion or failure of an asynchronous operation.
// asynchronous operations means operation thats will take long time to execute and will not block the flow of code
// by allows the remaining code to execute.

// How Promises will resolve the call-back hell issue???

user.then(()=>console.log('1 execution')).then(()=>console.log('2 execution')).then(()=>console.log('3 execution'))

// this chaining of then function is called Promise chain and maintains the flow of program
// and avoids the issue of call-back hell.





