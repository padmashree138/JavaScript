// function expression = function without a name avoid polluting
//                     global scope with Write it then forget it

let count = 0;

document.getElementById("increaseBtn").onclick = function () {
  count += 1;
  document.getElementById("myLabel").innerHTML = count;
};

document.getElementById("decreaseBtn").onclick = function () {
  count -= 1;
  document.getElementById("myLabel").innerHTML = count;
};
