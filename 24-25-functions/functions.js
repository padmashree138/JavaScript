// function = Define code once, use many times
//            to perform some code, call the function name

startProgram();

function startProgram() {
  let userName = "Padmashree";
  let age = 21;

  happyBirthday(userName, age);
}

function happyBirthday(a, b) {
  console.log("Happy birthday to you!");
  console.log("Happy birthday to you!");
  console.log("Happy birthday dear", a);
  console.log("Happy birthday to you!");
  console.log("You are", b, "years old!");
}
