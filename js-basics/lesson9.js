// Lesson 9: Array methods and objects

// 1.
"use strict";

const tasks = [
  { title: "Read notes", priority: "high", done: true },
  { title: "Do exercise", priority: "high", done: false },
  { title: "Revise loops", priority: "low", done: false },
  { title: "Watch tutorial", priority: "low", done: true },
];


//1. Count done tasks
const countDone = (tasks) => tasks.filter((t) => t.done).length;
console.log("Done:", countDone(tasks));

//2. titlesFor(tasks, priority)
// what I wrote (works for "high" only, runs once)
tasks.filter((t) => t.priority === "high").map((t) => t.title);

// as a function (works for any tasks list, any priority)
function titlesFor(tasks, priority) {
  return tasks.filter((t) => t.priority === priority).map((t) => t.title);
}

console.log(titlesFor(tasks, "high"));   // ["Read notes", "Do exercise"]
console.log(titlesFor(tasks, "low"));    // ["Revise loops", "Watch tutorial"]



//3.
const updatedScores = { ...tasks, done: true};

// I could not complete this next boss 
//What you have to do 
const markDone = (task) => ({ ...task, done: true });
// (the extra ( ) around { } tells JS "this is an object, not a code block")

const copy = markDone(tasks[1]);
console.log(copy);       // { title: "Do exercise", priority: "high", done: true }
console.log(tasks[1]);   // { ... done: false }  ← original untouched
