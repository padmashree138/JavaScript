// add || change HTML elements
// .innerHTML (vulnerable to Xross Style Scripting attcks)
// .textContent (more secure)

//const nameTag = document.createElement("h1")

const myList = document.querySelector("#fruits");
const listItem = document.createElement("li");
listItem.textContent = "Mango";
//myList.append(listItem);
//myList.prepend(listItem);
myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]);
