//Lesson 5: Conditionals (if / else)
//1.
const score = 30;

let grade;

if(score >= 80 && score <= 100) {
    grade = 'A';
} else if (score >= 70) {
    grade = 'B';
} else if (score >= 60) {
    grade = 'C';
} else if (score >= 50) {
    grade = 'D';
} else if (score >= 0 ) {
    grade = "F"
} else {
    grade = "Invalid score";
}

console.log(`Score: ${score}, Grade: ${grade}`);

//2.
const age = 16;

const status = age >= 18 ? "Adult" : "Minor";
console.log(`${status}`);

//3.
const username = "joseph";
const password = "dcit323";

if(!username.trim()) {
    console.log("Username required")
} else if (password.length < 8) {
    console.log("Password too short");
} else {
    console.log(`Welcome, ${username}`);
}

//4.
const num = 14;
const isEven = num % 2 === 0;
if(isEven) {
    console.log(`${num} is even`);
}  else {
    console.log(`${num} is odd`);
}

//5. Prediction
if ("0") console.log("A");
if (0) console.log("B");
if ("false") console.log("C");
if (null) console.log("D");
if ([]) console.log("E");   // tricky!

//A
//skips
//C
//skips
//E

//6. 
//"" falsy
// " " truthy
// -1 truthy
// NaN falsy
// undefined falsy
// "null" truthy
// {} truthy


//Thes are the six falsy values
// false   0   ""   null   undefined   NaN
