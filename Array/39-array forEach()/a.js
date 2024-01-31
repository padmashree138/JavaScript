// array.forEach() = excecutes provided callback function
//                    once for each array elements

let students = ["kitretsu", "dekesuki", "shinchan"];
students.forEach(capitalize);
students.forEach(print);

function capitalize(element, index, array) {
  array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element) {
  console.log(element);
}
