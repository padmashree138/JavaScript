//return = returns the value where function was invoked

let area;
let width;
let height;

width = window.prompt("Enter width");
height = window.prompt("Enter height");

area = getArea(width, height);

console.log("the area is:", area);

function getArea(width, height) {
  return width * height;
}
