// console.time() = starts s timer you can use to track down
//               how long an operation takes
//              Give each timer a unique name

console.time("Response time");

// alert("CLICK THE OK BUTTON!");

setTimeout(() => console.log("HELLO!"), 3000);

// end

console.timeEnd("Response time");
