

let title = document.querySelector("h1");

console.log(title);

const texts = document.querySelectorAll("p");


texts.forEach(p=>p.style.backgroundColor="red");

console.log(title.innerText);

const newTitle = title.innerText.replace("Y","Z");

title.innerText = newTitle;


const newElement = document.createElement("h2");

newElement.innerText = "DCI";

document.body.appendChild(newElement);

console.log(newElement);


const ul = document.querySelector("ul");

const JavaScript = document.querySelector("ul li:nth-child(2)");

ul.insertBefore(newElement,JavaScript);

newElement.className = "box";

newElement.style.display = "flex"; 

newElement.id = "title";

newElement.style.backgroundColor = "green";






console.log(document.body);

