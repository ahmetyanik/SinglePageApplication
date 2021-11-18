
const input = document.querySelector("input");
const form = document.querySelector("form");


async function getDatas(){
    
    const div = document.querySelector("#repos");
    div.innerText = "";

   

    const inputValue = input.value;

    console.log(inputValue);

  const result =  await fetch(`https://api.github.com/users/${inputValue}/repos`);

  const repos = await result.json();


  console.log(repos);

  repos.forEach((repo)=>{

    const newDiv = document.createElement("div");
    newDiv.innerHTML = `<a href="${repo.html_url}"><div class="bg-success text-white border-bottom">${repo.name}</div></a>`

    div.appendChild(newDiv);


  })

  
}


form.addEventListener("submit",(e)=>{

    e.preventDefault()

    getDatas();

})

