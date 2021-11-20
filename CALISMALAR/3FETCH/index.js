
/* 
const sonuc = fetch("https://jsonplaceholder.typicode.com/todos");

sonuc
.then(data=>data.json())
.then(data=>console.log(data))

 */



async function sonuc(){

    const body = document.body;

    
    const result = await fetch("https://jsonplaceholder.typicode.com/todos");
    
    const array = await result.json();
    
    console.log(array);
   
}


sonuc()


