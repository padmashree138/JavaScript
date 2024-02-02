// error = object with a description of somethingwent wrong
//    can't open a file
//    lose coonection
//    user types incorrect input
//    TypeError

// throw = executes a user-defined error

try {
  let x = window.prompt("Enter a #");
  x = Number(x);

  if (isNaN(x)) throw "That wasn't a number!";
  if (x == "") throw "that was empty!";

  console.log(`${x} is a number`);
} catch (error) {
  console.log(error);
} finally {
  console.log("This always executes");
}
