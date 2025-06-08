let arr=[4,50,8,9,40];

//Use of reduce function
let max=-1;
for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i];
    }
}
console.log(max);

//Create a function to find the max number in an array
let maxVal=arr.reduce((max,el)=>{
    if(max<el){
        return el;
    }else{
    return max;
    }
});
console.log(maxVal);

// Check if all numbers in our array are multiples of 10 or not
let multiple = arr.every((el)=> el%10==0);
console.log(multiple);

//Create a function to find the min number in an array
let minVal=arr.reduce((min,el)=>{
    if(min>el){
        return el;
    }else{
    return min;
    }
});
console.log(minVal);