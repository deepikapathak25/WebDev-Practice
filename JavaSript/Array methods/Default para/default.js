function sum(a,b=2){
    return a+b;
}
// sum(1,4) = 5
// sum(1) = 3

function sum(a,b){
    return a+b;
}
//sum(1)=NaN

function sum(a=2){
    return a+b;
}
//sum(1,4)=5
//sum(1)=NaN

function sum(a=8,b){
    return a+b;
}
// sum(1,3)=4
// sum(1)= a=1,b=undefined

