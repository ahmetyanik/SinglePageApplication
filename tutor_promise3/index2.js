

const p = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        
        const array = [1,2,3,4];

        resolve(array);
    
    },3000)

})



p.then(data=>data[0]).then(data=>console.log(data))