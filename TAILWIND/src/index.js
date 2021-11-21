

const button = document.querySelector("#button");
const main = document.querySelector("main");

console.log(button);

function changeColor(){

    main.classList.add("bg-green-300");

}


button.addEventListener("click",(e)=>{
    
    e.preventDefault();
    changeColor();

})

