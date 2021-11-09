
const form = document.querySelector("#form");

const input = document.querySelector("#input");

input.addEventListener("focus",(e)=>{

    document.querySelector("body").style.backgroundColor = "red";
    console.log("Ben target:",e.target);
    console.log("Ben target:",e.target.id);
    
})

form.addEventListener("submit",submitForm);

function submitForm(e){

    console.log("Submit");

    e.preventDefault();
}