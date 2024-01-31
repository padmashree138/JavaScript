// array.filter() = creates a new array with all elements
//                which pass the test provided by a function
let ages = [18, 20, 22, 25, 19, 15];
let adults = ages.filter(checkAge);

adults.forEach(print);

function checkAge(element) {
  return element >= 18;
}
function print(element) {
  console.log(element);
}
