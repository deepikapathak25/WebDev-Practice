// 🔷 1️⃣ Creating an object:
let person = {
  name: "Deepika",
  age: 24,
  city: "Delhi"
};
console.log(person);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));





// 🔷 2️⃣ Accessing properties:
// ✅ Dot notation:
console.log(person.name);  // Deepika
console.log(person.age);  // 24

// ✅ Bracket notation:
console.log(person["age"]);  // 24
console.log(person["name"]);  // Deepika

// 🔷 3️⃣ Adding & Updating properties:
// ✅ Add a property:
person.country = "India";
console.log(person.country);  // India

// ✅ Update an existing property:
person.age=22;
person.city = "Mumbai";
console.log(person.city);  // Mumbai
console.log(person.age);  // 22
console.log(person["age"]);  // 22

// 🔷 4️⃣ Deleting a property:
delete person.age;
console.log(person);

// 🔷 5️⃣ Looping through properties:
//Method 1:
for (let i in person) {
  console.log(`${i}: ${person[i]}`);
}
//Method 2
for (let i in person) {
  console.log(i + " : "+person[i]);
}




// 🔷 1️⃣ for loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// 🔷 2️⃣ while loop
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
// 🔷 3️⃣ do...while loop
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);
// 🔷 4️⃣ for...of loop
let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}
// 🔷 5️⃣ for...in loop
let person1 = { name: "Deepika", city: "Delhi", country: "India" };
for (let key in person1) {
    console.log(`${key}: ${person1[key]}`);
}



//QUIZ (DAY 3)
//Q1: ['title','pages','author'] option b
//Q2: b
//Q3: b
//Q4: [key,value], console.log(key + ":" + car["key"])
