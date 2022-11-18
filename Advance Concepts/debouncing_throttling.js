// Optimizing the event handling in javascript we use debouncing & throttling.

// Debouncing - It limits the number of function calls and wait for the certain
// amount of time until it runs again.

// Throttling is a technique to limit the execution of event handler functions
// It will call the function every Time the delay ends.


// Both can be used with a library Lodash.

const d = _.debounce(() => {
  // operation
}, 1000);

function click() {
  console.log("Hello");
  d();
}

// Throttle is normally used when you have a function that is called continuously
// while the user is interacting with your page, e.g. while scrolling. 
//Debounce is used to call a function when the user has stopped interacting,
// e.g. when they have stopped typing in an input field.
