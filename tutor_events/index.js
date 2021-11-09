const body = document.querySelector("body");
const input = document.querySelector("input");
const button = document.querySelector("button");

const box1 = document.querySelectorAll("div div")[0];
const box2 = document.querySelectorAll("div div")[1];
const box3 = document.querySelectorAll("div div")[2];

const ul = document.createElement("ul");
body.appendChild(ul);

function deleteElement(evt) {
 // evt.target.style.visibility = "hidden";

 // evt.target.parentElement.style.backgroundColor = "red";
  
}

function hide(evt) {
  // e.target refers to the clicked <li> element
  // This is different than e.currentTarget, which would refer to the parent <ul> in this context
  evt.target.style.visibility = "hidden";
}

box1.addEventListener("click", deleteElement);
box2.addEventListener("mouseenter", hide);

function createDiv(){

    const div = document.createElement("div");
    div.innerText = "X";
    ul.appendChild(div);
}

let selectedElement;

button.addEventListener("click",(e)=>{

    let num = input.value;

    console.log(num);

    document.querySelectorAll("div div").forEach(element=>{

        if(element.innerText === num){

            element.style.backgroundColor = "red";
            const newDiv = document.createElement("div");
            newDiv.innerText = "The color is changed";
            newDiv.style.fontSize = "20px";
            element.appendChild(newDiv);
            const deleteIcon = document.createElement("div");
            deleteIcon.innerText = "X";
            selectedElement = deleteIcon;
            element.appendChild(deleteIcon);

            deleteIcon.addEventListener("click",changeGreen);
        }
    })

})


function changeGreen(e){
    e.target.parentNode.style.backgroundColor = "green";

}







