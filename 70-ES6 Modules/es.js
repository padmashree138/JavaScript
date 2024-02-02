// modules are seperate chapters of a book
// file of a reusable code
// can import section of prewrittrn code whenever we want

import * as MathUtil from "./math_util.js";

console.log(MathUtil.PI);

let circumference = MathUtil.getCircumference(10);
console.log(circumference);

let area = MathUtil.getArea(10);
console.log(area);
