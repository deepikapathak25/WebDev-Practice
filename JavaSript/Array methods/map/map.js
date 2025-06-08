// let num= [ 1,2,3,4];
// let double = num.map((el)=>{

// });

let student = [
    {
        name: "Deepika",
        marks: 99
    },
    { 
        name: "Prakhar",
        marks: 99.4
    },
    {
        name: "Ritika",
        marks: 90
    },
];

let gpa = student.map((el)=>{
    return el.marks/10;
});