

let title = document.querySelector("h1");
console.log(title);

const paragraphs = document.querySelectorAll("p");

console.log(paragraphs);

console.log(title.innerText.replace("A","K"));

title.innerText = title.innerText.replace("A","K");

const skills = document.querySelector("ul");

console.log(skills);

const selenium = document.createElement("li");
selenium.innerText = "Selenium";

skills.appendChild(selenium);


const sql = document.createElement("li");

sql.innerText = "Sql";

skills.className = "ahmet";

console.log(skills);

title.className = "text-center";

title.style.backgroundColor = "red";

console.log(title);


