const title1 = document.getElementById("title");
console.log(title1);

const paragraphs = document.getElementsByClassName("text");
console.log(paragraphs[0]);

const heading = document.querySelector("#title");
console.log(heading);

const allTexts = document.querySelectorAll(".text");
console.log(allTexts);

const title = document.getElementById("title");
title.textContent = "Welcome to Day 6: DOM!";

const para = document.querySelector(".text");
para.innerHTML = "<strong>This is now bold text!</strong>";

const btn = document.getElementById("btn");
btn.style.backgroundColor = "pink";
btn.style.color = "black";
btn.style.padding = "10px 20px";


const btn1 = document.getElementById("btn");
btn1.addEventListener("click", () => {
    alert("Button was clicked!");
    btn1.textContent = "Clicked!";
    btn1.style.backgroundColor = "red";
});
