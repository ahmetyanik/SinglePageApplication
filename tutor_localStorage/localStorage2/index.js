
// EINFACH EINE VARIABLE ERSTELLEN


localStorage.newVariable = "ahmet";


// MIT EINEM ADDEVENTLISTENER

const input1 = document.querySelector("#input1");
const button1 = document.querySelector("#button1");

function addData(){

    const value = input1.value;

    localStorage.person = value;

}

button1.addEventListener("click",addData)


// MIT SETITEM NEUE VARIABLE ERSTELLEN

const input2 = document.querySelector("#input2");
const button2 = document.querySelector("#button2");

function newVariable(){

    let value = input2.value;

    localStorage.setItem("city",value);

}


button2.addEventListener("click",newVariable)



// // MIT GETITEM VALUE VON VARIABLE ZUGREIFEN

const button3 = document.querySelector("#button3");
const h1 = document.querySelector("#h1");

function getData(){

    let cityValue = localStorage.getItem("city");

    h1.innerText = cityValue;

}


button3.addEventListener("click",getData)


// REMOVE ITEM


const button4 = document.querySelector("#button4");
const h2 = document.querySelector("#h2");

function remove(){

    localStorage.removeItem("filmList");

}


button4.addEventListener("click",remove)

// Daten werden als String im lokalen Speicher gespeichert


// JSON.parse   ----> Wandelt String in Array um


let string = "[1,2,3,4,5]";

console.log(JSON.parse(string));


 // JSON.stringify   ----> Wandelt Array in String um


 let array = [9,8,7,6,5];

 console.log(JSON.stringify(array));


 // TO DO PROJECT


 const button5 = document.querySelector("#button5");
 const input3 = document.querySelector("#todos");
 const divToDo = document.querySelector("#divToDo")

/* 
function addToDo(){

    localStorage.setItem("todos",input3.value);

    const h3 = document.createElement("h3");
    h3.innerText = input3.value;

    divToDo.appendChild(h3);
}

 */

let todoARRAY = [];

function showAllToDos(){

    if(localStorage.todos){

    let stringVonLS = localStorage.getItem("todos");

    todoARRAY = JSON.parse(stringVonLS);

    console.log(todoARRAY);

    todoARRAY.forEach(e=>{

        const h3 = document.createElement("h3");
        h3.innerText = e;
        divToDo.appendChild(h3);

    })

    }else{

      localStorage.setItem("todos",input3.value);
    }

}





function addToDo(){

    todoARRAY.push(input3.value);

    let newtodoSTRING = JSON.stringify(todoARRAY);

    localStorage.setItem("todos", newtodoSTRING);

    divToDo.innerText = "";

    showAllToDos();

}

showAllToDos();

button5.addEventListener("click",addToDo);

