// console.log('Hello World!');
// console.log("Apna College!");

// let a=10;
// let b=5;
// console.log("sum is :", a+b);

// let pencilPrice =10;
// let erasorPrice = 5;
// // let output= "The total price is : " + (pencilPrice + erasorPrice) + " Rupees";

// let output =`The total price is : ${pencilPrice + erasorPrice} Rupees.`;
// console.log(output);


// //Arithmetic operators
// let a=10;
// let b=5;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

// //unary operators
// console.log(a++);
// console.log(++a);

// //Assignment operators
// b=a;
// console.log(b);

// //comparison operators
// let age=25;
// console.log(age>18);


// let color='blue';
// if(color=='red')
// {
//     console.log("Stop");
// }
// else if(color=="green"){
//     console.log("Go");
// }
// else if(color=="yellow"){
//     console.log("Slow down");
// }
// else{
//     console.log("Traffic light is broken");
// }

// let size='S';
// if(size=='XL'){
//     console.log("Price is 250");
// }
// else if(size=="L"){
//     console.log("Price is 200");
// }
// else if(size=="M"){
//     console.log("Price is 100");
// }
// else {
//     console.log("Price is 50");
// }

// if("a"){
//     console.log("true");
// }
// else{
//     console.log("false");
// }

// let day=8;
// switch (day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thrusday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid input");
//         break;
// }

// let firstname=prompt("Enter our name : ");
// console.log(firstname);

// let num=25;
// if(num%10==0)
// {
//     console.log("Good");
// }
// else{
//     console.log("Bad");
// }


// let Name =prompt("Enter your name: ");
// let age =prompt("Enter your age :");
// alert(`${Name} is ${age} years old`);

// let arr=[1,2,3,4,5,6,2,3];
// let num=2;

// for(let i=0;i<arr.length;i++){
//     if(arr[i] == num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

// let num=287152;
// let count=0;
// let copy=num;
// while(copy>0){
//     count++;
//     copy=Math.floor(copy/10);
// }
// console.log(count);

// let num=287152;
// let sum=0;
// let copy=num;
// while(copy>0){
//     digit=copy%10;
//     sum+=digit;
//     copy=Math.floor(copy/10);
// }
// console.log(sum);

// let n=5;
// let fact=1;
// for(let i=1;i<=n;i++){
//     fact*=i;
// }
// console.log(`actorial of ${n} is ${fact}`);

// let arr=[2,5,10,4,2,7,1,9];
// let large=0;
// for(let i=0;i<arr.length;i++){
//     if(large<arr[i]){
//         large=arr[i];
//     }
// }


// console.log(`largest number is ${large}`);


// Math.floor(Math.random()*10);

// const max=prompt("Enter max number:");
// const random=Math.floor(Math.random()*max)+1;
// console.log(random);

// let dice = Math.floor(Math.random()*6)+1;
// console.log(dice);

// let car={
//     name:"Maruti",
//     model: "Suzuki",
//     color: "white"

// }

// const person ={
//     name : "Deepika",
//     age : "22",
//     city: "Delhi"
// }
// console.log(person);

// function isAdult(){
//     let age =18;
//     if(age>=18){
//         console.log("adult");
//     }else{
//         console.log("not adult");
//     }
// }
// isAdult();

// function printPoem(){
//     console.log("Twinkle Twinkle, little star");
//     console.log("How I wonder what you are");
// }
// printPoem();

// function dice(){
//     let num = Math.floor(Math.random()*6)+1;
//     console.log(num);
// }
// dice();
// dice();
// dice();
// dice();

// function printName(name,age){
//     console.log(`${name}'s age is ${age} years.`);
// }
// printName("Deepika", 22);
// printName("Prakhar", 23);
// printName("Karan");
// printName(21);

// function sum(a,b){
//     console.log(a+b);
// }
// sum(9,3);
// sum(4,5);
// sum(7,8);
// sum(345278848553,45745466);

// function avg(num1, num2, num3){
//     console.log((num1+num2+num3)/3);
// }
// avg(5,7,8);

// function multiple(num){
//     for( let i=1;i<=10;i++){
//         console.log(i*num);
//     }
// }
// multiple(2);

// function sum(a,b){
//     return (a+b);
// }
// let s=sum(9,3);
// console.log(s);
// console.log(sum(sum(3,2),4));

// function sumNum(n){
//     let s=0;
//     for(let i=1;i<=n;i++){
//         s+=i;
//     }
//     return s;
// }
// console.log(sumNum(10));


// let str=["hi","hello","bye","!"];
// function string(str){
//     let res="";
//     for(let i=0;i<str.length;i++){
//         res+=str[i];
//     }
//     return res;
// }
// console.log(string(str));


