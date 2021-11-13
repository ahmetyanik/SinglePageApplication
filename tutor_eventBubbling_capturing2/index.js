const listGroup = document.querySelector(".list-group");
const firstInput = document.querySelector("#todo");
const firstButton = document.querySelector("#submit");
const secondButton = document.querySelector("#clear-todos");

listGroup.addEventListener("click", (e) => {
  let target = e.target;

  if (target.className === "fa fa-remove") {
    target.parentElement.parentElement.classList.add("delete");
  }
});

firstButton.addEventListener("click", (e) => {
  let wert = firstInput.value;

  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between";
  li.innerText = wert;

  listGroup.appendChild(li);

  const a = document.createElement("a");
  a.className = "delete-item";

  li.appendChild(a);

  const i = document.createElement("i");

  i.className = "fa fa-remove";

  a.appendChild(i);

  firstInput.value = "";
  e.preventDefault();
});


secondButton.addEventListener("click",(e)=>{

    listGroup.classList.toggle("delete");

    e.preventDefault();
})