const list = document.getElementById("list");
const addBtn = document.getElementById("addBtn");

let count =2;
addBtn.addEventListener("click", ()=>{
    const newItem =document.createElement("li");
    if(!newItem){
        count=1;
    }
    newItem.textContent = `Item ${count}`;
    list.appendChild(newItem);
    count++;
});

const removeItem = document.getElementById("removeBtn");

removeBtn.addEventListener("click", () => {
    if(list.lastElementChild){
        list.removeChild(list.lastElementChild);
    }else{
        alert('No more Items to remove');
    }
});