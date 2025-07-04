//🔷Array Properties
/*
let foods = ["Pizza", "Burger", "Pasta"];
console.log("Initial array:", foods);
foods.push("Fries");
console.log("After push:", foods);
foods.pop();
console.log("After pop:", foods);
foods.unshift("Salad");
console.log("After unshift:", foods);
foods.shift();
console.log("After shift:", foods);
console.log("Length:", foods.length);
let sliced = foods.slice(0, 2);
console.log("Sliced:", sliced);
console.log("Index of Burger:", foods.indexOf("Burger"));
console.log("Includes Pasta?", foods.includes("Pasta"));
for (let i = 0; i < foods.length; i++) {
  console.log(`Food ${i+1}: ${foods[i]}`);
}
*/





/*
🔷Quiz answers
Q1: - let is a variable, in which we can update the values later. We cannot re declare it inside the same scope
    - const is also a variable but we can not update it once declared and assigned values. we cannot redeclare it
    - var was  used in initial before let and const . we can update it and redclare it.
Q2: undefined
Q3: Object(null)
Q4: let a=5;
    if(a>0){
        console.log("Positive");
    }
    else if(a==0){
        console.log("Zero");
    }
    else{
        console.log("Negative");
    }
Q5: ["apple", "banana", "mango"]
Q6: colors.shift();
Q7: yes,-1
Q8: for(let i=0;i<animals.length;i++){
    console.log(animals[i]);
    }
*/





/*
//Functions practices
// 🔷 1️⃣ Function returning sum of all numbers in an array
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15

//🔷 2️⃣ Function that reverses a string
function reverseString(str){
    // return str.split("").reverse().join(""); //(In-build function)
    let reversed = ""; // start with empty string
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; // add characters from end to start
    }
    return reversed;
}
console.log(reverseString("Deepika"));

//🔷 3️⃣ Arrow function that squares a number
//option 1:
const square = (n) => n * n;
console.log(square(6)); // 36
//option 2:
function square1(n) {
    return n * n;
}
console.log(square1(5));

//🔷 4️⃣ Function with default parameter
const greet = (name="guest") => console.log(`Hello, ${name}!`);
greet("Deepika"); // Hello, Deepika!
greet();          // Hello, Guest!

*/






//🔷 Next Topic: Nested if-else and practical examples

// 🚀 Example 1: Grade Calculator
//Method 1
const calculator = (marks) => {
    if(marks>=90){
        console.log("A");
    }
    else if(marks>=80){
        console.log("B");  
    }
    else if(marks>=70){
        console.log("C");
    }
    else{
        console.log("Fail");
    }
}
calculator(85); //output: B

//Method 2
function grade(score) {
    if (score >= 90) {
        console.log("Grade: A");
    } else if (score >= 80) {
        console.log("Grade: B");
    } else if (score >= 70) {
        console.log("Grade: C");
    } else {
        console.log("Grade: Fail");
    }
}
grade(85); // B
grade(65); // Fail


//🚀 Example 2: Largest of 3 numbers
//Method 1:
const largest = (a,b,c) =>{
    if(a>b && a>c){
        console.log(a);
    }
    else if(b>a && b>c){
        console.log(b);
    }
    else{
        console.log(c);
    }
}
largest(3,14,5);

//Method 2:
const largest1 = (a, b, c) => {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
};
console.log(largest1(3, 14, 5)); // 14

//Method 3:
const largest2 = (a, b, c) => Math.max(a, b, c);
console.log(largest2(3, 14, 5)); // 14

//Method 4:
function largest4(a, b, c) {
    if (a >= b && a >= c) {
        console.log(`${a} is largest`);
    } else if (b >= a && b >= c) {
        console.log(`${b} is largest`);
    } else {
        console.log(`${c} is largest`);
    }
}
largest4(5, 7, 6); // 7



