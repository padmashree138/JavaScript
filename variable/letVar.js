/*
variable scope = where a variable is accessible

let = variable limited to block scope{}
var = variable related to function(){}

global variable = declared outside anyfunction
if global, var will change browser's property

*/

let name = "Shree";
something();

function something() {
  for (var i = 1; i <= 3; i += 1) {
    console.log(i);
  }
}
