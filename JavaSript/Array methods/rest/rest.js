function sum(...args){ 
    //arguments
    for(let i=0;i<args.length;i++){
        console.log("You gave us: ",args[i]);
    }
    return args.reduce((add,el)=>add+el);
}

function min(){
    console.log(arguments);
    console.log(arguments.length);
}

function sum1(...args){
    return arguments.reduce((sum,el)=>sum+el);
}

function min1(msg, ...args){
    console.log(msg);
    return arguments.reduce((min,el)=>{
        if(min>el){
            return el;
        }else{
            return min;
        }
    });
}