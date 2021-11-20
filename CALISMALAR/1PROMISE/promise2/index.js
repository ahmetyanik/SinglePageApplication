

const array = [];

function arrayGoster() {
  
  return new Promise(resolve=>{

      resolve(console.log(array));

  })
}

function elemanEkle(sayi) {
  let sonuc = new Promise((resolve) => {
    setTimeout(() => {
      array.push(sayi);
      resolve(array);
    }, 2000);
  });
  return sonuc;
}


function arrayLength() {
  new Promise((resolve) => {
    setTimeout(() => {
        resolve(console.log(array.length));
      
    }, 1000);
  });
}

function elemanCikar() {


   return new Promise((resolve,reject)=>{
        
       setTimeout(() => {
           
           if(array.length>0){
               array.pop()
               resolve();
           }else {
               reject("Eleman kalmadi!!")
           }
       }, 2000);
        

    }) 
}

let sayi = 9;
 
arrayGoster()
  .then((data) => elemanEkle(5))
  .then((data) => arrayGoster())
  .then((data)=>elemanEkle(sayi))
  .then((data) => arrayLength())
  .then((data) => elemanEkle(6))
  .then((data) => arrayGoster())
  .then((data) => arrayLength())
  .then((data)=>elemanCikar())
  .then((data)=>elemanCikar())
  .then((data)=>elemanCikar())
  .then((data)=>elemanCikar())
  .catch(err=>console.log(err))

  





  
  
