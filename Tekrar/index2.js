
const divs = document.querySelectorAll("div");

divs.forEach(div=>{


    div.addEventListener("click",e=>{      

        e.stopPropagation();

        console.log(div);

        div.style.backgroundColor = "green";
    })

})









