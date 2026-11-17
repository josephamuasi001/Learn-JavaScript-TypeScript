// Lesson 3: Operators and comparisons
//1. 
const input = "25";
const ageNextYear = Number(input) + 1;
console.log(ageNextYear);


//2. 
const totalSeconds = 135;

const minutes = totalSeconds / 60;
const seconds = totalSeconds % 60;
console.log(Math.floor(minutes), "minutes", seconds, "seconds");


//3.
const num = 14;
let isEven = true;

console.log(num % 2 === 1 && isEven);
console.log(num % 2 === 0 && isEven);

//4.
console.log(10 === "10");
console.log(10 == "10");
console.log(7 % 3);
console.log(true && !false);
console.log(3 > 2 > 1);   // tricky!

//Predict 
// false
// true
// 1 
// true
// true

// 5. 
const score = 62;
const attendance = 70;
 

console.log(score >= 50 && attendance >= 75);

// this was false because even though the score is greater than 50, 
// the attendance is less than 75 which means true && false, but &&
// is only true when both statements are true, hence the statement is false.
