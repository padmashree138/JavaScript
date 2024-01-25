// while loop = repeat same code
//              while some conditions are true
//              potentially infinite

/*
 let userName1 = "";

while (userName1 == "" || userName1 == null) {
  userName1 = window.prompt("Enter your name");
}

console.log("Hello", userName1); 
*/

//do while loop = do something,
//                check condition, repeat if true

/*
let userName;

do {
  userName = window.prompt("Enter your name");
} while (userName == "");
console.log("Hello", userName);
*/

// for loop = repeat some code a certain amount of times

for (let i = 10; i > 0; i -= 1) {
  console.log(i);
}
console.log("HAPPY NEW YEAR!");
