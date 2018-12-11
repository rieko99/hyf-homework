console.log('=== Exercise 3.1 ===');

let english = "Hello World";
let syrian = "مرحبا بالعالم";
let japanese = "konichiwa sekai";
let danish = "Hej Verden";

console.log(english, syrian, japanese, danish);


console.log('=== Exercise 3.2 ===');
let nr = 7.25;
let result = Math.round(nr);

console.log(result);


console.log('=== Exercise 3.3 ===');

let sports = [];

console.log('The array sports can hold multiple objects, strings, integers related sports.');
console.log('The value of the array sports is [] - empty array');
// console.log("An arrays value most be a string, int. etc.");
console.log(sports);

let myFavoriteAnimals = ["Lions", "Dogs", "cats", "Horses"];
console.log(myFavoriteAnimals);

myFavoriteAnimals.push("baby big");
console.log(myFavoriteAnimals);


console.log('=== Exercise 3.4 ===');

let myString = "this is a test";
let myStringLength = myString.length;
console.log(myStringLength); //14

console.log('=== Exercise 3.5 ===');

var a = ["A", 1, null]; // array
let b = "B"; // string
let c = false; // boolean
let d = 1; // number
let e; // undefined
let f = null; // null

console.log('The value of my variable a is: ' + a);
console.log('The value of my variable b is: ' + b);
console.log('The value of my variable c is: ' + c);
console.log('The value of my variable d is: ' + d);
console.log('The value of my variable e is: ' + e);
console.log('The value of my variable f is: ' + f);


console.log('=== Exercise 3.6 ===');

console.log('The type of a is object, because an array is an object');
console.log(typeof a);

console.log('The type of b is string');
console.log(typeof b);

console.log('The type of c is boolean');
console.log(typeof c);

console.log('The type of d is number');
console.log(typeof d);

console.log('The type of e is undefined');
console.log(typeof e);

console.log('The type of f is object');
console.log(typeof f);
