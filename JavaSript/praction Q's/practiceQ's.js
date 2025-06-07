//return square of a number using arrow function

const sqr=n => n*n;
console.log(sqr(4));

//funtion that prints "hello world" 5 times at intervals of 2s each

let id = setInterval(()=>{
    console.log("Hello world");
},2000);

setTimeout(()=>{
    clearInterval(id);
    console.log("clear interval run");
},10000);
