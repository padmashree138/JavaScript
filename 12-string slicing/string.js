// slice() extracts a section of a string 
//        and returns as a new string 
// without modifying the original

let fullName = "Padmashree Petkar";
let firstName;
let lastName;

//firstName = fullName.slice(0, 10);
//lastName = fullName.slice(11);

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") +1);

console.log(firstName);   
console.log(lastName);   