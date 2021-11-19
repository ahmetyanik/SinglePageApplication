/* 

const p = new Promise((resolve,reject)=>{

  if(false){

    resolve(10);
  }else{

    reject("Das ist false");
  }

});

p.then(data=>data*10).then(data=>data/2).then(data=>console.log(data)).catch(err=>console.log(err))

 */


const isMomHappy = true;

const willGetNewPhone = new Promise((resolve,reject)=>{

    setTimeout(()=>{

        
        if(isMomHappy){
            
            const phone = {
                name : "iphone 13",
                price : 1000,
                color : "white"
            };
            
            resolve(phone);
        }else{
            
            const err = "Mom is not happy!!!"
            reject(err);
        }
    },3000)
});


const showToFriends = function(phone){

    const message = "Hi friends this is my new phone: " + phone.name;

    return Promise.resolve(message);
}



const askMom = function(){

    willGetNewPhone.then(showToFriends).then(message=>console.log(message)).catch(err=>console.log(err))
}

askMom();