// Lesson 6 Loops

// 1. 
//No idea as to how to go about it so we can skip question 1 

//2. 
const n = 7;
for(i = 1; i <= 12; i++) {
    console.log(`${n} x ${i} = ${i * n}`);
}

// 3.
let evenTotal = 0;

for (i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        evenTotal +=i;
    } else {
        continue;
    }
}

console.log("Sum of Even nubers(1-100)", evenTotal);


// 4. 
for(i = 1; i <= 30; i++) {
    if(i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz")
    }else if(i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i);
    }
}


//5. 
const laptopPrice = 2000;
const monthly = 150;
let saved = 0;
let months = 0;

while (saved < laptopPrice) {
  saved += monthly;
  months++;
}

console.log(`Laptop in ${months} months (saved GHS ${saved})`);


// 6.
const names = ["Ama", "Kofi", "", "Yaw", " "];
for(name of names) {
    if(!name.trim()) {
        continue;
    } else {
        console.log(`Hello, ${name}`);
    }
};