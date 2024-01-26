/*
toLacaleString() = returns a string with language sensitive 
  representation of the number i.e en-IND, hindi,etc

number.toLocaleString(locale, {options})
^
^
locale = Specify that language (undefined = default set in browser)
options = object with formatting options
*/

let myNum = 100;
/*
myNum = myNum.toLocaleString("hi-IN"); // Hindi
myNum = myNum.toLocaleString("en-UK"); // US English
myNum = myNum.toLocaleString("de-DE"); //std German
*/

//myNum = myNum.toLocaleString("hi-IN", { style: "currency", currency: "INR" });
// myNum = myNum.toLocaleString("en-US", { style: "currency", currency: "USD" });
// myNum = myNum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });

//myNum = myNum.toLocaleString(undefined, { style: "percent" });

myNum = myNum.toLocaleString(undefined, { style: "unit", unit: "celsius" });

console.log(myNum);
