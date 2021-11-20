/* 

function getData() {

  const result = new Promise((resolve) => {

    setTimeout(() => {
      resolve();
    }, 3000);
    
  });

  return result;
}

getData()
  .then((data) => console.log("Ahmet"))
  .then((data) => console.log("Murat"));


   */
/* 
let sayi = 0;


function getData(){

   const sonuc = new Promise((resolve, reject) => {
  
    if (true) {
      resolve(5);
    } else {
      reject("Olumsuz");
    }
  });

  sonuc.then(data=>{
    sayi = data;
    console.log(data)});  
  
}

getData()


setTimeout(()=>{

  console.log(sayi);

},2000)


 */
/* 
let sayi = 0;

function getData() {
  const sonuc = new Promise((resolve, reject) => {
    if (true) {
      resolve(5);
    } else {
      reject("Olumsuz");
    }
  });

  sonuc.then((data) => {
    sayi = data;
    console.log(sayi);
  });
}




async function siraliSonuc() {
  await getData();
  console.log(sayi + 60);
}

siraliSonuc();
 */




