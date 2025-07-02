//Let, Var, Const

// let city = "Delhi";
// city = "Mumbai"; // ✅ allowed

// const country = "India";
// // country = "Nepal"; // ❌ will throw error

// var language = "JavaScript";
// language = "JS"; // ✅ allowed

// console.log(city, country, language);





//Type of Data

// let name = "Deepika";
// let age = 24;
// let isOnline = true;
// let hobbies = ["coding", "reading"];
// let user = { role: "Developer" };
// let x;
// let y = null;

// console.log(typeof name);     // string
// console.log(typeof age);      // number
// console.log(typeof isOnline); // boolean
// console.log(typeof hobbies);  // object (array)
// console.log(typeof user);     // object
// console.log(typeof x);        // undefined
// console.log(typeof y);        // object (quirk!)




//If-Else 

// let num = 8;

// if (num % 2 === 0) {
//   //console.log(`${num} is even`);
//   console.log(num + " is even");
// } else {
//   console.log(`${num} is odd`);
// }


//For loop
// for (let i = 1; i <= 5; i++) {
//    // console.log("Square of " +i+ " is " + i*i);
//     console.log(`square of ${i} is ${i*i}`);
// }




//Work with an array
let fruits = ["apple", "banana", "mango"];

fruits.push("orange"); // add at end
console.log(fruits);

fruits.pop(); // remove last item
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i+1}: ${fruits[i]}`);
}


