// 📘 Step 1️⃣: Synchronous vs Asynchronous JavaScript

// 🔷 🔷 What does synchronous mean? => ✅ JavaScript executes one statement at a time, in order — it’s single-threaded.
console.log("Start");
console.log("Middle");
console.log("End");


// 🔷 🔷 Why asynchronous? => Some operations (like API calls, file reading, timers) take time.
// ✅ JS doesn’t want to block the whole program waiting — so it allows these to run in the background, and moves on.

console.log("Start");

setTimeout(() => {
    console.log("Middle (after 1 seconds)");
}, 1000);

console.log("End");


// 📘 Step 2️⃣: Callbacks

//🔷 🔷 What is a Callback? => ✅ A function passed as an argument to another function, to be called later. Used a lot in async programming!
function greet(name, callback) {
    console.log(`Hi, ${name}`);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

function hello(){
    console.log("I Love You!");
}

greet("Deepika", sayBye);
greet("Ritika", hello);

//Example
function doTask(taskName, callBack){
    console.log(`I am starting my task of ${taskName}.`);
    callBack();
}

function finished(){
    console.log("I have done my today's task.");
}
doTask("Reading", finished);


// 📘 Step 3️⃣: Promises

//🔷 🔷 What is a Promise? => A Promise is an object that represents the eventual result (or failure) of an asynchronous operation.
// ✅ States of a Promise:
// pending → still working
// fulfilled → success
// rejected → error

const myPromise = new Promise((resolve, reject) => {
    // async operation
    const success = true;

    if (success) {
        resolve("✅ Operation successful!");
    } else {
        reject("❌ Operation failed!");
    }
});

myPromise
    .then(result => {
        console.log(result); // if resolved
    })
    .catch(error => {
        console.log(error);  // if rejected
    });

myPromise
    .then(result => {
        console.log(result);
        return "✅ Next step";
    })
    .then(next => {
        console.log(next);
    })
    .catch(error => {
        console.log(error);
    });


//Example

const delayed = new Promise((resolve) => {
    setTimeout(() => {
        resolve("✅ Done after 2s");
    }, 2000);
});

delayed.then(msg => {
    console.log(msg);
});




// 📘 Step 4️⃣: async / await

// 🔷 🔷 What is async / await? =>  Syntactic sugar over Promises — lets you write asynchronous code that looks synchronous.

// 🔷 🔷 Example without async/await:
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve("✅ Promise resolved!");
    }, 2000);
});

// promise.then(result => {
//     console.log(result);
// });

// 🔷 🔷 Same example with async/await:
async function run() {
    const result = await promise;
    console.log(result);
}

run();


//Example

const readBook = new Promise(resolve => {
    setTimeout(()=> {
        resolve("Done!");
    }, 2000);
});
async function read() {
    const ans = await readBook;
    console.log(ans);
}
read();
