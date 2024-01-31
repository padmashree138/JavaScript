let firstName = "Bro"; //strings
let age="21"; //strings
let student = true; //boolean

console.log("Hello ",firstName);
console.log("you are",age, "years old");
console.log("enrolled",student);

document.getElementById("p1").innerHTML= "Hello " + firstName;
document.getElementById("p2").innerHTML= " You are " + age + " years old";
document.getElementById("p3").innerHTML= "Enrolled:" + student;