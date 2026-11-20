// 1. 
console.log(Boolean(-1));   // predict: true  (not on the falsy list)
console.log(Boolean(NaN));  // predict: false (on the list)
console.log(Boolean({}));   // predict: true
console.log(Boolean("0"));  // predict: true  (non-empty string)
console.log(Boolean(0));    // predict: false


// 2.

function getGrade(score) {
    if(score < 0 || score > 100) {
        return 'Invalid';
    }else if( score >= 80) {
        return 'A';
    } else if (score >= 70) {
        return 'B';
    } else if(score >= 60) {
        return 'C';
    } else if(score >= 50) {
        return 'D';
    } else {
        return 'F';
    };
}

const classScores = [85, 72, 50, 30, 105, -5];

for(const classScore of classScores) {
    console.log(`Score: ${classScore} , Grade: ${getGrade(classScore)} `);
}


// 3. 
const isEven = (num) => num % 2 === 0;

for(i = 1; i <= 10; i++) {
    if(isEven(i)) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}


// 4. 

function fizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
    if (n % 3 === 0) return "Fizz";
    if (n % 5 === 0) return "Buzz";
    return n;
}

for (let i = 1; i <= 15; i++) {
  console.log(fizzBuzz(i));     // the CALLER decides to print
}

// 5.I do not know how to go about this We can move on boss
//  don't worry about trying to make me do it again 
// You can give me the solution so we move on from there  

function monthsToSave(price, monthly) {
  let saved = 0;
  let months = 0;

  while (saved < price) {     // keep saving until we reach the price
    saved += monthly;
    months++;
  }

  return months;              // hand the answer back
}

console.log(monthsToSave(2000, 150));  // 14
console.log(monthsToSave(500, 100));   // 5





// 6.

function greet(name = "friend") {
  if (!name.trim()) {
    return "Hello, friend!";
  }
  return `Hello, ${name}!`;
}

console.log(greet("Ama"));
console.log(greet(" "));
console.log(greet());
