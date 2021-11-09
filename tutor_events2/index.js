
const boxes = document.querySelectorAll("div div");


const box1 = document.querySelector("#boxes div");
const box2 = document.querySelectorAll("#boxes div")[1];

const box3 = document.querySelectorAll("#boxes div")[2];

function changeColor(e){

    console.log("event",e.target);

    console.log(e.target.innerText);

    e.target.style.backgroundColor = "red";
}

box1.addEventListener("click",changeColor);

box2.addEventListener("click",changeColor);

box3.addEventListener("click",changeColor);


boxes.forEach((element)=>{


    const div = document.createElement("div");
    div.innerText = "Ich bin div."
    element.appendChild(div);

    const deleteIcon = document.createElement("div");

    deleteIcon.innerText = "X";

    element.appendChild(deleteIcon);

    deleteIcon.addEventListener("click",deleteElement);
    
})

const h1 = document.querySelector("h1");

h1.addEventListener("mouseenter",deleteElement);


function deleteElement(e){

    e.target.parentNode.style.visibility = "hidden";

}

