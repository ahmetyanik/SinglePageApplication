
const divs = document.querySelectorAll("div");

divs.forEach(div=>{


    div.addEventListener("click",e=>{      

        e.stopPropagation();

        console.log(e.target);

        e.target.style.backgroundColor = "green";
    })

})









