// const student = {
//     name : "Deepika",
//     age : 22,
//     eng : 95,
//     math : 93,
//     phy : 97,
//     getAvg(){
//         console.log(this);
//         let avg=(this.eng+this.math+this.phy)/3;
//         console.log(`${this.name} got avg marks = ${avg}`);
//     }
// }
//"this keyword refers to an object that is executing the current piece of code"

// function getAvg(){
//         console.log(this);
//         // let avg=(this.eng+this.math+this.phy)/3;
//         // console.log(`${this.name} got avg marks = ${avg}`);
// }

//this with arror functions apne parent k scope ko adopt kr lete hai aur function apne scope to adopt krta hai 

const student = {
    name : "Prakhar",
    marks : 95,
    prop : this,//global scope

    getName: function(){
        return this.name;
    },
    getMarks: ()=>{
        console.log(this); //parent's scope
        return this.marks;
    },
    getInfo1: function(){
        setTimeout(()=>{
            console.log(this);//student obj bcoz of arrow function
        },2000);
    },
    getInfo2: function(){
        setTimeout(function() {
            console.log(this);//window obj bcoz of simple function
        },2000);
    },

};