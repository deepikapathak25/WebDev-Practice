let fruits = ["apple", "banana", "mango"];
console.log(fruits);
console.log(fruits[0]);  // apple
console.log(fruits[2]);  // mango
fruits[1] = "orange";
console.log(fruits);  // [ 'apple', 'orange', 'mango' ]
fruits.push("grape");     // add at end
fruits.pop();             // remove last
fruits.unshift("kiwi");   // add at start
fruits.shift();           // remove first
console.log(fruits);
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers[0]);
console.log(numbers[numbers.length-1]);

let numbers1 = [1, 2, 3, 4, 5];//forEach()
numbers1.forEach(num => {
    console.log(num * 2);
});

let doubled = numbers.map(num => num * 2);//map
console.log(doubled);

let even = numbers.filter(num => num % 2 === 0);//filter
console.log(even);

let numbers2 = [1, 2, 3, 4, 5];
let firstEven = numbers2.find(num => num % 2 === 0);//find
console.log(firstEven);

let firstEven1 = numbers2.find(num => {//find
    for(let i=0;i<numbers2.length;i++){
        console.log(num % 2 === 0);
    }
});
console.log(firstEven1);

let hasNegative = numbers.some(num => num < 0);//some
console.log(hasNegative);

let allPositive = numbers.every(num => num > 0);//every
console.log(allPositive);

let numbers3 = [1, 2, 3, 4, 5];
let sum = numbers3.reduce((acc, curr) => acc + curr, 0);//reduce
console.log(sum);

let nums = [5, 1, 4, 2, 3];
nums.sort((a, b) => a - b);
console.log(nums);

nums.reverse();
console.log(nums);





