
const button = document.querySelector("#todo-form button");
const input = document.querySelector("#todo");
const listGroup = document.querySelector(".list-group");
const allListItem = document.querySelectorAll(".list-group-item");
const deleteAll = document.querySelector("#clear-todos");
const filterInput = document.querySelector("#filter");

console.log(allListItem);


button.addEventListener("click",(e)=>{
    
    

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.innerText = input.value;
    listGroup.appendChild(li);

    const a = document.createElement("a");
    a.className = "delete-item";

    li.appendChild(a);

    let i = document.createElement("i");
    i.className = "fa fa-remove"

    a.appendChild(i);



    input.value = "";
    e.preventDefault();
})

 deleteAll.addEventListener("click",()=>{

    listGroup.classList.toggle("delete");
}) 

filterInput.addEventListener("change",()=>{



    
})





// EVENT DELEGATION
const cardBody = document.querySelectorAll(".card-body")[1];

cardBody.addEventListener("click",(e)=>{

    let target = e.target;

    if(target.className === "fa fa-remove"){


        
        target.parentElement.parentElement.className = "delete";
    }

})
