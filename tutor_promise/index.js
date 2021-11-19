// 1 GENEL OLARAK PROMISE

// Su durum olursa su veriyi gönderecegim
// Su hata olursa da su hatayi verecegim

/* 
let p = new Promise((resolve,reject)=>{

    if(false){
        resolve("Success");
    }else{
        reject("Failure");
    }
})

p.then(data=>{
    console.log(data);
}).catch(data=>{
    console.log(data);
})
 */

// 2 BIRDEN FAZLA THEN KULLANMANIN AMACI
/* 
new Promise((resolve,reject)=>{

    setTimeout(() => {

        resolve(5);
        
    }, 1000);

}).then(data=>data*data).then(data=>console.log(data))
 */

// 3 GERCEK HAYAT ÖRNEGI

// 4
const isMomHappy = true;

// 5

const willGetNewPhone = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isMomHappy) {
      const phone = {
        name: "iphone 13",
        price: 1000,
        color: "white",
      };

      resolve(phone);
    } else {
      const err = `Mom is not happy!`;
      reject(err);
    }
  }, 2000);
});

// 7
const showToFriends = function (phone) {
  const message = "Hi friends this is my new phone " + phone.name;

  return Promise.resolve(message);
};

// 6

/* 
const askMom = function(){

    willGetNewPhone.then(data=>console.log(data)).catch(err=>console.log(err))

}
 */

// 8

const askMom = function () {
  willGetNewPhone
    .then(showToFriends)
    .then((message) => console.log(message))
    .catch((err) => console.log(err));
};

askMom();
