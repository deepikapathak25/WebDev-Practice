//Spread 
let arr = [1,2,3,1,2,3,0,1,2,3,1,2,3,0];
console.log(..."DeepikaPathak");
Math.min(...arr);
arr.push(-9);

console.log(Math.min(...arr));
console.log(...arr);

//spread with Array literals
let arr1 = [1,2,3,4,5];
let newArr = [...arr1];
let chars = [..."hello"];
let odd = [1,3,5,7,9];
let even = [2,4,6,8,10];
let nums = [...odd, ...even];

//Spread with Object literals
const data = {
    email: "ironman@gmail.com",
    password: "abcd",

};
const dataCopy = {...data, id: 123, country: "India"};

let arr2=[1,2,3,4,5];
let obj1={...arr2};

let obj2 = {..."hello"};