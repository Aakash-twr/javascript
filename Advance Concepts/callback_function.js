// callback function - The function which is passed to another function and is called later.
// It allow us to do async operations
           // callback
setTimeout(function (){
    console.log("Timer");
},5000)

function x(y){
    console.log("X");
     y();
}
  // callback function
 x(function y(){
    console.log("Y");
})

// garbage collectors and removal of eventListeners



