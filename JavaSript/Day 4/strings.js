// 🔷 Step 1️⃣: What is a string?
let name1 = "Deepika";
let name2 = 'Pathak';
let greeting = `Hello, ${name1} ${name2}`;

console.log(greeting);
// Escape characters
console.log("Deepika\nPathak");
console.log("Deepika\tPathak");
// Template literals
let city = "Delhi";
console.log(`I live in ${city}`);


// 🔷 Step 2️⃣: String Properties & Methods
let fullName = "Deepika Pathak";
// 📘 Methods to try:

// ✅ length
console.log(fullName.length); 
// Output: 14

// ✅ toUpperCase()
console.log(fullName.toUpperCase()); //DEEPIKA PATHAK

// ✅ toLowerCase()
console.log(fullName.toLowerCase()); //deepika pathak

// ✅ trim()
let messy = "   Deepika   ";
console.log(messy.trim()); //Deepika

// ✅ indexOf()
console.log(fullName.indexOf("Pathak")); //8

// ✅ slice(start, end)
console.log(fullName.slice(0, 4));  //Deep

// ✅ replace()
console.log(fullName.replace("Deepika", "D.")); //D. Pathak

// ✅ split()
console.log(fullName.split(" "));
// Output: [ 'Deepika', 'Pathak' ]


