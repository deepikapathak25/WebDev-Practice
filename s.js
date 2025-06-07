// for(let i=5;i<=50;i=i+5){
//     console.log(i);
// }

// let n=prompt("Write your number:");
// n=parseInt(n);
// for(let i=n;i<=n*10; i=i+n){
//     console.log(i);
// }

// for(let i=1;i<=3;i++){
//     console.log(`outer loop ${i}`)
//     for(let j=1;j<=3;j++){
//         console.log(j);
//     }
// }

// let i=1;
// while(i<=10){
//     console.log(`outer loop ${i}`);
//     let j=1;
//     while(j<=5){
//         console.log(j);
//         j++;
//     }
//     i++;
// }

// const fav="avatar";
// let guess = prompt('Enter your guess! ');

// while((guess!=fav) && (guess != 'quit')){
//     guess=prompt("wrong guess, please try again. ");
// }

// if(guess==fav){
//     console.log("Congrats!!!!");
// }else{
//     console.log("You quit!");
// }

let fruits = ["mango", "apple", "banana", "grapes", "litchi"];
fruits.push("pineapple")

for(let i=0; i<fruits.length;i++){
    console.log(i, fruits[i]);
}