// if statement = if it's true do this if not don't

let age = 65;

if (age >= 65) {
  console.log("You are old!!");
} else if (age >= 18) {
  console.log("You are an adult!!");
} else if (age < 0) {
  console.log("YOU HAVEN'T BORN YET!!");
} else {
  console.log("You are a child!");
}

let online = true;

if (online) {
  console.log("You are online!");
} else {
  console.log("You are offline");
}

document.getElementById("myButton").onclick = function () {
  const myCheckbox = document.getElementById("myCheckbox");
  const visaBtn = document.getElementById("visaBtn");
  const mastercardBtn = document.getElementById("mastercardBtn");
  const paypalBtn = document.getElementById("paypalBtn");

  if (myCheckbox.checked) {
    console.log("You are Subscribed!");
  } else {
    console.log("You are NOT Subscribed!");
  }

  if (visaBtn.checked) {
    console.log("You are paying with a Visa!");
  } else if (mastercardBtn.checked) {
    console.log("You are paying with a MasterCard!");
  } else if (paypalBtn.checked) {
    console.log("You are paying with a PayPal!");
  } else {
    console.log("You must select a payment type!");
  }
};

/*switch = statement which examines a value
        for a match against many case clause.
        More efficient tham many "else if" statements */

let grade = "87";

switch (true) {
  case grade >= 90:
    console.log("You did great!");
    break;

  case grade >= 80:
    console.log("You did good!");
    break;

  case grade >= 70:
    console.log("You did okay!");
    break;

  case grade >= 60:
    console.log("You passed!");
    break;

  case grade > 60:
    console.log("You FAILED!");
    break;

  default:
    console.log(grade, "is not a letter Grade");
}
