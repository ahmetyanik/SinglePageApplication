
const icons = document.querySelectorAll(".fa.fa-remove");

icons.forEach(icon=>{


    icon.addEventListener("click",e=>{

       icon.parentElement.parentElement.style.display = "none";

       icon.parentElement.parentElement.className = "";

    })

})




