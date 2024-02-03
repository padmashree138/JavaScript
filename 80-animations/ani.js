const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");

myButton.addEventListener("click", begin);

function begin() {
  let timerId = null;
  let x = 0;
  let y = 0;
  let scaleX = 1;
  let scaleY = 1;
  let degrees = 0;

  timerId = setInterval(frame, 5);

  function frame() {
    if (x >= 200 || y >= 200) {
      clearInterval(timerId);
    } else {
      degrees += 5;
      x += 1;
      y += 1;

      myAnimation.style.transform = "rotateZ(" + degrees + "deg)";
      myAnimation.style.left = x + "px";
      myAnimation.style.top = y + "px";
    }
    if (scaleX >= 2 || scaleY >= 2) {
      clearInterval(timerId);
    } else {
      scaleX += 0.01;
      scaleY += 0.01;
      myAnimation.style.transform = "scale(" + scaleX + "," + scaleY + ")";
    }
  }
}
