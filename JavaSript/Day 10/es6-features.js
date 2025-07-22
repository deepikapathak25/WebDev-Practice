// 📘 Step 1️⃣: Template Literals
// ✅ Introduced in ES6.
// ✅ Allows you to embed variables and expressions directly in strings, and write multi-line strings easily.
// ✅ Uses backticks (`) instead of quotes (' or ").

// 🔷 🔷 Without template literals:
const name = "Deepika";
const city = "Delhi";
console.log("Hello, my name is " + name + " and I live in " + city + ".");

//🔷 🔷 With template literals:
console.log(`Hello, my name is ${name} and I live in ${city}.`);

// 🔷 🔷 Multi-line strings:
const message = `
Hello!
This is a multi-line
message.
`;
console.log(message);

// Example
const name1= "Deepika";
const age1= "23";
const city1= "Noida";
console.log(`My name is ${name1}, I'm ${age1} years old, and I live in ${city1}.`);



// 📘 Step 2️⃣: Destructuring
// ✅ Destructuring lets you unpack values from arrays or objects into separate variables — very concise!

// 🔷 🔷 Array destructuring:
const fruits = ["apple", "banana", "mango"];
const [first1, second, third] = fruits;
console.log(first1);   // apple
console.log(second);  // banana
console.log(third);   // mango
//✅ You can also skip items:
const [ , , last] = fruits;
console.log(last); // mango

// 🔷 🔷 Object destructuring:
const person = {
    name2: "Deepika",
    age2: 25,
    city2: "Delhi"
};
const { name2, city2 } = person;
console.log(name2);  // Deepika
console.log(city2);  // Delhi
// ✅ You can also rename variables:
const { name2: myName } = person;
console.log(myName);  // Deepika

// Example 1:
const colors = ["Red", "Green", "Blue"];
const [c1, c2, c3] = colors;
console.log(c1);
console.log(c2);
console.log(c3);

//Example 2:

const book = {
    title : "JS Basics",
    pages : "200"
}
const {title,pages} = book;
console.log(title);
console.log(pages);


// 📘 Step 3️⃣: Spread & Rest Operators
// 🔷 🔷 What are they?
// ✅ Both use the ... (three dots), but have different purposes:
// Spread → expands elements
// Rest → gathers elements

// 🔷 🔷 Spread

// ✅ Used to expand arrays/objects:
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);  // [1, 2, 3, 4, 5]

// ✅ Spread with objects:
const obj1 = { name: "Deepika" };
const obj2 = { ...obj1, city: "Delhi" };
console.log(obj2); // { name: "Deepika", city: "Delhi" }

// 🔷 🔷 Rest

// ✅ Used to collect remaining elements:
const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest);  // [20, 30, 40]

//✅ Rest in functions:
// function sum(...numbers) {
//     return numbers.reduce((acc, curr) => acc + curr, 0);
// }
// console.log(sum(1, 2, 3, 4)); // 10

function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3, 4)); // 10


// Example 1
const arr3 = [1,2];
const arr4 = [3,4];
const arr5 = [...arr3, ...arr4];
console.log(arr5);

// Example 2
function logColors(...colors){
    for(let color of colors){
        console.log(color);
    }
}
logColors("red", "green", "blue");



// 📘 Step 4️⃣: Shorthand Properties & Recap
// 🔷 🔷 What are Shorthand Properties?
// ✅ In ES6, if your variable name and object property name are the same, you can just write the variable name.

// 🔷 Without shorthand:
const name3 = "Deepika";
const age = 25;
const person1 = {
    name: name3,
    age: age
};
console.log(person1);

// 🔷 With shorthand:
const name4 = "Deepika";
const age4 = 25;
const person3 = { name4, age };
console.log(person3);
