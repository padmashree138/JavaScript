//callBack = function passed a an argument to another function

//  ensures a function is not going to run before a task is
//  completed.
//  It helps us develop asynchronous code.
//  (When one function has to wait for another function),
//  it helps us avoid errors and potential problems for example
//  Ex: we could wait for a file to load

sum(2, 3, displayDOM);

function sum(x, y, callBack) {
  let result = x + y;
  callBack(result);
}

function displayConsole(output) {
  console.log(output);
}

function displayDOM(output) {
  document.getElementById("myLabel").innerHTML = output;
}
