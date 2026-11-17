//Lesson 2: Value types and typeof

//1. 
const name1 = "Emmanuella Fosu";
const age = 21;
const isHungry = true;
let time;
let height = null;

console.log("Name:", name1, "Type:", typeof name1);
console.log("Age:", age, "Type:", typeof age);
console.log("Hungry:", isHungry, "Type:", typeof isHungry);
console.log("Time:", time, "Type:", typeof time);
console.log("Height:", height, "Type:", typeof height);

//2. 

console.log("10" + 5);
console.log(10 + 5);
console.log("10" - 5);   // careful!
console.log(typeof "true");
//Prediction
// 105
// 15 
// error
// string


// 3. .
const input = "25";
const ageNextYear = 26;

console.log("Next year age:", ageNextYear, typeof ageNextYear);

// 4
// Undefined is used for variable whos value has not been defined (eg. let x) or set while a null is used for variables whos value has been set to null (eg. let age = null;)

