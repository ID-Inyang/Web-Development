// JavaScript Beginner Practice Exercise
// Copy and paste this code into your browser console to practice!

console.log("=== Welcome to JavaScript Practice! ===");

// 1. Variables and Data Types
let yourName = "Your Name Here"; // Change this to your actual name
const currentYear = 2025;
let birthYear = 2000; // Change this to your birth year

console.log("Hello, " + yourName + "!");
console.log(`You were born in ${birthYear}`);

// 2. Basic Math
let age = currentYear - birthYear;
console.log(`You are ${age} years old`);

// 3. Conditional Logic
if (age >= 18) {
    console.log("You are an adult!");
} else {
    console.log("You are a minor!");
}

// 4. String Methods
let email = "example@gmail.com";
console.log("Email in uppercase:", email.toUpperCase());
console.log("@ symbol position:", email.indexOf('@'));
console.log("Domain:", email.slice(email.indexOf('@') + 1));

// 5. Loops
console.log("=== Counting to 5 ===");
for (let i = 1; i <= 5; i++) {
    console.log(`Count: ${i}`);
}

// 6. Arrays and Loops
const hobbies = ["reading", "gaming", "coding", "music"];
console.log("=== My Hobbies ===");
for (let i = 0; i < hobbies.length; i++) {
    console.log(`${i + 1}. ${hobbies[i]}`);
}

// 7. Boolean Logic
let isWeekend = true;
let hasHomework = false;

if (isWeekend && !hasHomework) {
    console.log("Time to relax!");
} else if (isWeekend && hasHomework) {
    console.log("Weekend homework time!");
} else {
    console.log("Regular day!");
}

console.log("=== Practice Complete! ===");
console.log("Try modifying the variables above and run the code again!");