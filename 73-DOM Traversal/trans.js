let element = document.querySelector("#desserts");
let children = Array.from(element.children);

children.forEach((child) => (child.style.backgroundColor = "lightgreen"));

child.style.backgroundColor = "lightgreen";

// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// Array.from(.children)
