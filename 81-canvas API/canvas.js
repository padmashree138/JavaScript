// canvas API = it is used for animation,games

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

// drowing lines on canvas
// context.strokeStyle = "red";
// context.lineWidth = 10;
// context.beginPath();
// context.moveTo(0,0);                     //this is for drawing lines on canvas
// context.lineTo(250,250);
// context.lineTo(250,500);
// context.lineTo(250,250);
// context.lineTo(500,0);
// context.lineTo(250,250);
// context.stroke();

// context.fill
// context.beginPath();
// context.moveTo(250,0);
// context.lineTo(0,250);
// context.lineTo(500,250);           //this is for drawing triangle
// context.lineTo(250,0);

// context.fill();

// for rectangle
// context.fillStyle = "yellow";
// context.fillRect(0,0,250,250,);
// context.strokStyle = "black";
// context.strokStyle(0,0,250,250,);

// context.fillStyle = "red";
// context.fillRect(0,250,250,250,);
// context.strokStyle = "black";
// context.strokStyle(0,250,250,250,);

// context.fillStyle = "black";
// context.fillRect(0,250,250,250,);
// context.strokStyle = "black";
// context.strokStyle(0,250,250,250,);

// drawing circle

//context.beginPath();
//context.arc(250, 250, 200, 0, 2 * Math.PI);
//context.stroke();
//context.fill();

// drawtext

context.font = "50px MV boli";
context.fillStyle = "grey";
context.textAlign = "center";
context.fillText("Hello!", canvas.width / 2, canvas.height / 2);
