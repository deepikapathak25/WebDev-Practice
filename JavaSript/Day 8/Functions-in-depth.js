//📘 Step 1️⃣: Function Declaration vs Expression

//🔷 1️⃣ Function Declaration
greet ("Deepika");
function greet(name){
    console.log(`Hello, ${name}!`);
}


//🔷 2️⃣ Function Expression
const greet2 = function(name){
    console.log(`Hi ${name}!`);
};
greet2("Deepika");


// Example 1
add (5,6);
function add ( a, b){
    console.log(`Sum is ${a+b}.`);
};


// Example 2
const multiply = function(a,b){
    console.log(`Multiply of ${a} & ${b} is ${a*b}.`);
}
multiply(5,6);


// 📘 Step 2️⃣: Arrow Functions & Default Parameters

//🔷 1️⃣ Arrow Functions
const greet3 = (name) => {
    console.log(`Hello, ${name}!`);
};
greet3("Deepika");

// Example 
const square = x => x * x;
console.log(square(4));  // 16

// 🔷 2️⃣ Default Parameters
const greetWithDefault = (name = "Guest") => {
    console.log(`Welcome, ${name}!`);
};

greetWithDefault();         // Welcome, Guest!
greetWithDefault("Deepika"); // Welcome, Deepika!



// 📘 Step 3️⃣: Scope (Global, Function, Block)

//🔷 What is Scope?
//✨ Scope = where a variable can be accessed from.

//🔷 1️⃣ Global Scope
// ✅ Declared outside any function or block — available everywhere.
let globalVar = "I’m global";

console.log(globalVar); // ✅ Accessible

function show() {
    console.log(globalVar); // ✅ Accessible here too
}

// 🔷 2️⃣ Function Scope
// ✅ Declared inside a function — available only in that function.

function test() {
    let localVar = "I’m local";
    console.log(localVar); // ✅
}
test();

// console.log(localVar); ❌ Error: not defined


//🔷 3️⃣ Block Scope
// ✅ Declared inside {} (with let or const) — only available inside that block.

if (true) {
    let blockVar = "I’m block scoped";
    console.log(blockVar); // ✅
}
// console.log(blockVar); ❌ Error: not defined

//⚠️ var is not block scoped, only function scoped.

// 📘 Step 4️⃣: Closures
// ✨ A closure is a function that “remembers” the variables from the scope in which it was created — even after that scope has finished executing.

function outer() {
    let outerVar = "I’m from outer";

    function inner() {
        console.log(outerVar);
    }

    return inner;
}

const closureFn = outer();
closureFn(); // I’m from outer


// Example
function outer1(a){
    let count =a;
    function increment (){
        count++;
        console.log(count);
    }
    return increment;
}
const closureFn1 = outer1(5);
closureFn1();
closureFn1();
closureFn1();
closureFn1();

const closureFn2 = outer1(2);
closureFn2();


// 📘 Step 5️⃣: The this keyword
// ✨ The value of this depends on how a function is called — not where it’s written.
// ✅ In simple words:
// this refers to the object that is calling the function.

//🔷 1️⃣ In the global scope (browser):
console.log(this);

// 🔷 2️⃣ Inside a method:
const person = {
    name: "Deepika",
    greet: function() {
        console.log(`Hello, I’m ${this.name}`);
    }
};

person.greet(); // Hello, I’m Deepika

// 🔷 3️⃣ Alone in a function (strict mode):
function test() {
    console.log(this);
}

test(); // undefined (in strict mode) or window

//🔷 4️⃣ Arrow functions:
const obj = {
    name: "Deepika",
    greet: () => {
        console.log(this.name);
    }
};

obj.greet(); // undefined
