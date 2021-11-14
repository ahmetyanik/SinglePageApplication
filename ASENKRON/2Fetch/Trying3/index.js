
const body = document.querySelector("body");

body.style.display = "flex";
body.style.flexWrap = "wrap";



function getData() {

  const sonuc = new Promise((resolve,reject)=>{

    resolve()
  })
  
  fetch("https://jsonplaceholder.typicode.com/todos")
  .then((data) => data.json())
  .then((data) => data.forEach(element=>{

    
    const div = document.createElement("div");

    div.innerHTML = `<div style="border:1px solid black;width:200px;height:200px;margin:10px">${element.id}<span>${element.title}<span></div>`;
   

    body.appendChild(div);   

    
    
  }))

}

getData()

