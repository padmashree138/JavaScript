// 2D arrays = array madeup of arrays

let fruits = ["apples", "oranges", "banana"];
let vegetables = ["carrot", "spinach", "beans"];
let meats = ["eggs", "chicken", "fish"];

let groceryList = [fruits, vegetables, meats];

groceryList[2][0] = "steaks";

for (let list of groceryList) {
  for (let food of list) console.log(food);
}
