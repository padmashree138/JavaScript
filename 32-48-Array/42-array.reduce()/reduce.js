// array.reduce() = reduces an array to a single value

let prices = [5, 10, 16, 19, 21, 54];
let total = prices.reduce(checkOut);

console.log(`The total is: $ ${total}`);

function checkOut(total, element) {
  return total + element;
}
