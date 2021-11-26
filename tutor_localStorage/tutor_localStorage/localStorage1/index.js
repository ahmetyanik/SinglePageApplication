const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

let todoslar;


function todolariGetir(){
    
    if(localStorage.todos){
        
        
        todoslar =  JSON.parse(localStorage.todos);
        showTodos();
        
    }else{  
        
        
        todoslar = [];
    }
    
}

function addTodoToLocal(){

    let value = input.value;
    todoslar.push(value);
    localStorage.todos = JSON.stringify(todoslar);
    input.value = "";
    console.log(todoslar);
    ul.innerText = "";
    showTodos();

}

function showTodos(){

    let fromLocal = JSON.parse(localStorage.getItem("todos"));

    

    fromLocal.forEach(todo=>{

        const li = document.createElement("li");
        li.innerText=todo;
        ul.appendChild(li);

    })

}

function removeTodo(e){

    todoslar.forEach((todo,index)=>{
        if(todo === e.target.innerText){

            console.log("hello");
            todoslar.splice(index,1);
            e.target.remove();
        }
    })
    localStorage.todos = JSON.stringify(todoslar);
    
    

}

button.addEventListener("click",addTodoToLocal);

ul.addEventListener("click",removeTodo);




todolariGetir();