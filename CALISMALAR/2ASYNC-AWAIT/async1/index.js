/* 

async function getData(){

   const user = await fetch("https://jsonplaceholder.typicode.com/todos");

   let jsonlar = await user.json();

   let user1 =  jsonlar[0]

   console.log(user1);

   
}


console.log(getData());

 */


function getData(){
    
   

   fetch("https://jsonplaceholder.typicode.com/todos").then(data=>data.json()).then(data=>data.forEach(user=>{

   user.id = user.id +2;

   user.title = "Yasa Ahmet Pasa"

    console.log(user);

   }))
    
   
 }
 
 getData()


/* 
 async function datas(){


   let bekle = await new Promise(resolve=>{

       setTimeout(() => {
           
            resolve(console.log("Merhaba"))
        }, 2000);
    
   }) 
   

    return bekle;

 }

 datas()

  */