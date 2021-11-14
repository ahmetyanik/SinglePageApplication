

async function getData(){

    
    let sonuc = await new Promise((resolve)=>{
        
        setTimeout(function(){
        resolve(console.log(1))

    })


    },2000)

   

    console.log("2");

}

getData()