// synchronous code = in an ordered sequence
//                   step by step
//                   start now,finish now

// asynchronous code = out of sequence
//                     task which takes time
//                     start now, finish later

console.log("START");
setTimeout(() => console.log("This is asynchronous"), 5000);
console.log("END");
