/*let fruits = document.getElementsByName("fruits");

fruits.forEach((fruit) => {
  if (fruit.checked) {
    console.log(fruit.value);
  }
});
*/

/*
let vegetables = document.getElementsByTagName("li");
vegetables[2].style.backgroundColor = "lightgreen";
*/

/*
let desserts = document.getElementsByClassName("desserts");
desserts[2].style.backgroundColor = "lightgreen";
*/

/*
let element = document.querySelector("[for]");
element.style.backgroundColor = "lightgreen";
*/

let elements = document.querySelectorAll(".desserts");
elements.forEach((element) => {
  element.style.backgroundColor = "lightgreen";
});
