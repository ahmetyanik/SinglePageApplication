/* 
const sonuc = new Promise((resolve,reject)=>{

    resolve("Basarili")
})

sonuc.then(data=>console.log(data)).catch(data=>console.log(data))

 */
/* 
let sayi = 20;

function setSayi(param) {
  sayi = sayi + param;
  return sayi;
}

function hello() {
  console.log("hello");
}

function isNumber(param) {
  return new Promise((resolve, reject) => {
    if (param !== 5) {
      resolve(param);
    } else {
      reject("Sayi degil");
    }
  });
}


function getData(){

   return fetch("https://jsonplaceholder.typicode.com/posts");
}

getData().then(data=>data.json()).then(data=>{

    
    data.forEach(element=>{
        
        let div = document.createElement("div");
        
        div.innerHTML = `<div>${element.id}</div>`;
        document.body.appendChild(div);
    })

    console.log("1");

})

console.log("hello");


 */

async function sirala(a, b) {
  
  const sonuc =  await new Promise((resolve, reject) => {

    setTimeout(()=>{

        if (a > b) {
          resolve(console.log(a + " büyük " + b));
        } else {
          reject(console.log(a + " kücük " + b));
        }

    },2000)

});

  console.log("ahmet");

  
}


sirala(3, 5)
