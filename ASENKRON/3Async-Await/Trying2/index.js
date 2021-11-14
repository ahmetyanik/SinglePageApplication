

async function getData(){

    let result = await new Promise((resolve,reject)=>{

       setTimeout(function(){
              
        resolve(console.log("Hello"))
          },2000)

    })


    let result2 = await new Promise((resolve,reject)=>{

        setTimeout(function(){
               
         resolve(console.log("Hello2"))
           },1000)
 
     })
    
   
     console.log("Ahmet");
    
    
    return result;
}

getData().then(data=>data)