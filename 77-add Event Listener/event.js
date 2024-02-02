// .addEventListener (event, function,useCapture)
//  can add many event handlers to a single element
//  even same element which invokes different function

const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

innerDiv.addEventListener("click", changeBlue);
outerDiv.addEventListener("click", changeBlue, true);

function changeBlue() {
  alert(`You selected ${this.id}`);
  this.style.backgroundColor = "lightblue";
}
