const myBtn = document.querySelector("#myBtn");
const myImg = document.querySelector("#myImg");

myBtn.addEventListener("click", () => {
  if (myImg.style.visibility == "hidden") {
    myImg.style.visibility = "visible";
  } else {
    myImg.style.visibility = "hidden";
  }
});
