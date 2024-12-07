// JavaScript Cheatsheet

// 1. Variables
// Variables are containers for storing data. You can declare them using var, let, or const.
var x = 5;       // var: function-scoped
let y = 10;      // let: block-scoped
const z = 15;    // const: constant, cannot be reassigned

// 2. Data Types
// JavaScript supports various data types such as numbers, strings, booleans, objects, and arrays.
let num = 42;          // Number
let str = "Hello";     // String
let bool = true;       // Boolean
let obj = { name: "John", age: 30 };  // Object
let arr = [1, 2, 3];   // Array

// 3. Functions
// Functions can be declared using the function keyword or as arrow functions.
function add(a, b) {
    return a + b;
}

const multiply = (a, b) => a * b;

// 4. Arrays and Methods
// Arrays store multiple values in a single variable. Common methods include push(), pop(), unshift(), shift().
let fruits = ["Apple", "Banana"];
fruits.push("Orange");    // Adds "Orange" to the end
fruits.pop();             // Removes the last element
fruits.shift();           // Removes the first element
fruits.unshift("Grapes"); // Adds "Grapes" to the beginning

// 5. Loops
// Loops are used to execute a block of code repeatedly.
for (let i = 0; i < 5; i++) {
    console.log(i);  // Outputs: 0, 1, 2, 3, 4
}

let j = 0;
while (j < 5) {
    console.log(j);  // Outputs: 0, 1, 2, 3, 4
    j++;
}

// 6. Conditional Statements
// Conditional statements are used to perform actions based on different conditions.
if (x > y) {
    console.log("x is greater than y");
} else if (x < y) {
    console.log("x is less than y");
} else {
    console.log("x is equal to y");
}

// 7. DOM Manipulation
// JavaScript can manipulate HTML elements using the Document Object Model (DOM).
document.getElementById("demo").innerHTML = "Hello World!";  // Change content of an element
document.getElementById("demo").style.color = "blue";        // Change CSS style

// 8. Events
// JavaScript can handle events like clicks, mouseovers, and key presses.
document.getElementById("myBtn").addEventListener("click", function() {
    alert("Button clicked!");
});

// 9. Objects
// Objects are collections of key-value pairs, similar to dictionaries in Python.
let person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello " + this.name);
    }
};
console.log(person.name);  // Access property
person.greet();            // Call method

// 10. Template Literals
// Template literals allow embedded expressions and multiline strings.
let name = "Alice";
let greeting = `Hello, ${name}!`;  // Using template literals
console.log(greeting);  // "Hello, Alice!"

// 11. Error Handling
// JavaScript handles errors using try...catch blocks.
try {
    let result = riskyFunction();
} catch (error) {
    console.log("An error occurred: " + error.message);
}

// 12. Classes (ES6)
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

let person1 = new Person("John", 30);
person1.greet();  // "Hello, my name is John"

// 13. Asynchronous JavaScript
// JavaScript handles asynchronous operations using callbacks, Promises, and async/await.

// Callback:
function fetchData(callback) {
    setTimeout(() => {
        callback("Data loaded");
    }, 1000);
}

fetchData(function(data) {
    console.log(data);  // "Data loaded"
});

// Promise:
let myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Data loaded");
    } else {
        reject("Error occurred");
    }
});

myPromise.then((message) => {
    console.log(message);  // "Data loaded"
}).catch((error) => {
    console.log(error);  // "Error occurred"
});

// Async/Await:
async function loadData() {
    try {
        let response = await fetch("https://api.example.com");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error loading data:", error);
    }
}

loadData();

// 14. ES6 Features
// Some important features introduced in ES6:

// Destructuring:
const person2 = { name: "John", age: 30 };
const {namee , age } = person2;  // name = "John", age = 30

// Arrow Functions:
const sum = (a, b) => a + b;

// Default Parameters:
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greet();  // "Hello, Guest!"
