// promise = object that sums up the result of an asynchronous operation
//      let asynchronous methods return values like synchronous
//    a promise to return something

// the state is pending then fulfilled
// the result is what can be returned
// 2 parts producing & consuming

const wait = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

wait(3000).then(() => console.log("Thanks for Waiting"));
