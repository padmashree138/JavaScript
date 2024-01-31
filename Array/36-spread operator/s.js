// spread operator = allows an iterablesuch as string
//  ...   or array or string to be expanded in places where
//        zero or more arguments are expected
//        i.e unpacks elements

/*
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let maximum = Math.max(...numbers);
console.log(maximum);
*/

let class1 = ["Kitretsu", "Dekesuki", "Shinchan"];
let class2 = ["Nezuko", "Shizuka", "Himawari"];

class1.push(...class2);

console.log(...class1);
