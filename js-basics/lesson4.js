// Lesson 4: Strings and template literals
//1.
const firstName = "Joseph";
const lastName = "Amuasi";
const fullName = firstName + " " + lastName;
console.log(fullName);
const fullName2 = `${firstName} ${lastName}`;
console.log(fullName2);


//2.
const item = "Laptop";
const price = 4500;
const qty = 2;

console.log(`2 x ${item} = GHS ${2 * price}`);


//3.
const rawEmail = " Joseph.AMUASI@Gmail.com ";
const cleanEmail = rawEmail.trim().toLowerCase();
console.log(cleanEmail);


let isGmail = cleanEmail.endsWith("@gmail.com");
console.log(isGmail);

//4.
const word = "DCIT323";
console.log("Word:",word);
const firstChar = word[0];
console.log("First Character:",firstChar);
const lastChar = word[word.length - 1];
console.log("Last Character:",lastChar);
const letters = word.slice(0, 4);
console.log("Letters:", letters);
const charCount = word.length;
console.log("Character Count:", charCount);

//5. Prediction
let city = "accra";
city.toUpperCase();
console.log(city);
console.log(`${2 + 3}` + 1);
console.log("Hi".length === 2);

//Value thrown away not stored
// accra
// 51
//true