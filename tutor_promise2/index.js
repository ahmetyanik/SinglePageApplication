/* 

const p = new Promise((resolve,reject) => {
  reject(`Es gibt einen Fehler!`);
});

p.then(data=>console.log(data)).catch(err=>console.log(err))

 */

const isMomHappy = true;

const willGetNewPhone = new Promise((resolve,reject)=>{

    setTimeout(()=>{

   

    if(isMomHappy){

        const phone = {
            name : "iphone 13",
            price : 1000,
            color : "white"
        }

        resolve(phone);
    }else{

        const err = `Mom is not happy!!!`;
        reject(err)
    }

},5000)
})

const showToFriends = function(phone){

    const message = `Hi friends this is my new phone ${phone.name}`;

    return Promise.resolve(message);
}


const askMom = function(){

    willGetNewPhone.then(showToFriends).then(message=>console.log(message)).catch(data=>console.log(data))
}



askMom();