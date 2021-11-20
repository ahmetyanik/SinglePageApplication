

async function getData(){

   const user = await fetch("https://jsonplaceholder.typicode.com/todos");

   let jsonlar = await user.json();

   let user1 =  jsonlar[0]

   console.log(user1);

   
}


console.log(getData());

 

// DISARDAKI DEGISKENE PROMISE'TEN VERI GÖNDERMEK mmc 170
/* 
let obje1;

 function getData(){

   return new Promise(resolve=>{

      fetch("https://jsonplaceholder.typicode.com/todos").then(data=>data.json()).then(data=>data[0]).then(data=>resolve(data))

   }).then(data=>{
      obje1=data
      console.log(obje1)
     })

    
 }
 
 getData()

 setTimeout(() => {

   console.log("set:",obje1);
    
 }, 3000);

  */

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




