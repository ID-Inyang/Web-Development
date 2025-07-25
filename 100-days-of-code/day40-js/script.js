/*// Arrays
let fruits = ["apple", "banana", "orange"];
console.log(fruits[2]);

let songs = ["Song A", "Song B", "Song C"];
console.log(songs[0]);

// Activity 1: Arrays
let snacks = ["Chips", "Donuts", "Tacos", "Cake"];
console.log(snacks[3]);*/

/*
// Array Modifications
let tasks = ["eat", "code", "sleep"];

// Add to the end
tasks.push("repeat");

// Remove from the end
tasks.pop();

// Add to the beginning
tasks.unshift("wake up");

// Remove from the beginning
tasks.shift();

console.log(tasks);
*/
/*
// Activity 2: Arrays
let friends = ["Ada", "Bola", "Chi"];
friends.push("David");
console.log(friends);
friends[1] = "Bisola";
friends.pop();
console.log(friends);
*/

/*
// Looping through Arrays
let scores = [10, 20, 30];

// 1. For loop
// for (let i = 0; i < scores.length; i++)
// {
//     console.log(scores[i]);
// }

// for (let score of scores) {
//     console.log(score);
// }

scores.forEach(score => {
    console.log(score);
});*/

/*
// Transforming Arrays
let prices = [100, 205, 300];
console.log(prices)

let discounted = prices.map(p => p * 0.9);
console.log(discounted);

let ages = [12, 18, 22, 15];

let adults = ages.filter(age => age >= 18);
console.log(adults) */

/*
// Homework  
let favoriteThings = ["About Me Sections", "Boats", "Cakes", "Cookies", "Honesty"];

let favoriteThingC = favoriteThings.filter(fav => fav[0] == "C");

console.log(favoriteThingC);*/

/*
// Lesson 2: JavaScript Objects — Labeled Boxes of Data
let student = {
    studentName: "Elaine",
    age: 23,
    class: "Final Year"
};

let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022
};

// console.log(car.brand);
// console.log(car["model"]);

let pet = {
    petName: "Tweety",
    type: "Bird",
    age: 3
}

// console.log(pet.petName);
// console.log(pet["type"]);

pet.color = "Brown";
pet.age = 4;
console.log(pet);

delete pet.type

console.log(pet); */

/*
// Nested Objects and Arrays in objects

let student = {
    studentName: "Musa",
    age: 16,
    address: {
        street: "10 Main St",
        city: "Lagos"
    }
};

// console.log(student.address.city);

let user = {
    userName: "Khalifa",
    hobbies: ["gaming", "drawing", "coding"]
};

console.log(user.hobbies[1]); */

/*
// Looping Through Objects
let books = {
    title: "JavaScript",
    author: "Kaytie",
    pages: 1000,
    year: 2025
};

for (let key in books) {
    console.log(`${key}: ${books[key]}`);
} */
/*
// Homework
let profile = {
    userName: "Idongesit Inyang",
    age: 24,
    techSkills: ["Basic", "Fortran", "Displine"],
    location: {
        city: "Uyo",
        country: "Nigeria"
    }
}

console.log(profile.location.city);
console.log(profile.techSkills[2]); */

// Lesson 3: Functions - Reusable Blocks of Code
function greet() {
    console.log("Hello, Intern!");
}

greet();

function add(a, b) {
    return a + b;
}

let result = add(3, 5);
console.log(result);