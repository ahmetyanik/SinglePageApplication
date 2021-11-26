const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

let array;



if(localStorage.todos){

    array = JSON.parse(localStorage.getItem("todos"));

}else{

    array = [];
}

console.log(array);