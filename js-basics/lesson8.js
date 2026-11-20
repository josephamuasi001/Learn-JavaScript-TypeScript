//1. 
const scores = [67, 85, 42, 90, 55, 73];

console.log("First Score:", scores[0]);
console.log("Last Score:", scores[scores.length - 1]);
console.log("Number of Elements:", scores.length);


// 2.

function average(numbers) {
    let sum = 0;
    let count = 0;
    for(const n of numbers) {
        sum += n;
        count++;
    }
    return sum / count;
}

console.log("Average Score:", average(scores).toFixed(2));


// 3.
//Highest Score
function highest(numbers) {
    let highNum = numbers[0];
    for(const n of numbers) {
        if(n > highNum) highNum = n;
    } 
    return highNum;
}

console.log("Highest Number:", highest(scores));

function lowest(numbers) {
    let lowNum = numbers[0];
    for(const n of numbers) {
        if(n < lowNum) lowNum = n;
    } 
    return lowNum;
}

console.log("Lowest Number:", lowest(scores));


// 4.
function passedOnly(numbers) {
    let passed = [];
    for (const n of numbers) {
        if(n >= 50) {
            passed.push(n);
        }
    }
    return passed;
}

console.log("Passed Scores:", passedOnly(scores));

// 5. 
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

function gradeAll(numbers) {
    let grade = [];
    for (const n of numbers) {
        grade.push(getGrade(n));
    }
    return grade;
}

console.log("Grade All:", gradeAll(scores));


// 6.
const list = ["rice", "oil"];

list.push("sugar");
console.log(list);
list.unshift("bread");
console.log(list);
list.pop();
console.log(list);

function addItem(list, item) {
    if(!list) {
        list.push(item);
    } 
    return list;
}

console.log(addItem(list, "milk"));