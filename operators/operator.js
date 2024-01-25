//Gives ability to check for more than 1 condition concurrently
// && AND (Both conditions are true)
// || OR (Either can be true)

let temp1 = 15;
let sunny = false;

if (temp1 > 0 && temp1 < 30 && sunny) {
  console.log("The weather is good!");
} else {
  console.log("The weather is bad!");
}

// ! NOT logical operator
// used to reverse condition's boolean value
// true to false   false to true

let temp2 = 15;
let sunny1 = true;

if (!(temp2 > 0)) {
  console.log("it's cold outside");
} else {
  console.log("it's warm outside");
}

if (!sunny1) {
  console.log("it's cloudy outside");
} else {
  console.log("it's sunny outside");
}
