// Javascript is a synchronous single threaded language. It has a call stack.
// It execute one line at a time.
//The call stack is present in thr javascript engine.

// Call stack just execute whatever it find inside it and pops it out.

// Web apis : Present in the browser itself
// 1. setTimeout 
// 2. DOM Apis 
// 3.console.log
// 4.fetch
// 5.location

// Global object i,e window have access to all these web apis.
//  This object wraps up all this web apis and give access to the call stack.
// ex - window.console.log("Hello").

console.log("Start");

setTimeout(()=>{
  console.log("Happen")
},5000)

console.log("end")

// Output-:
//Start
// end
// Happen


// Call back Queue - This queue stores the callback functions waiting for in execution of the program.

// Microtask Queue - In case of call back functions associated with Promises it stores in this queue. It has higher
// priority than the call back queue.


// Event Loop - It Keep track of call stack and call back queue and micro task queue.
// Scheduling of tasks present in microtask queue ans call back queue is the job of event loop.



