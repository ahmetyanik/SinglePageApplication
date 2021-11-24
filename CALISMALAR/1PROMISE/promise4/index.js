const array = [];

function kisiEkle() {
  const input = prompt("Kisi giriniz:");

  const istek = new Promise((resolve, reject) => {


    if (!input || input.length === 0) {
      reject("Herhangi bir kisi eklemediniz!");
    
    } else if (input === "q") {
      console.log("********Kisiler**********");

      array.forEach((kisi) => {
        console.log(kisi);
      });

      reject(sonuc());
   
   
    } else if (input.length > 0) {
      array.push(input);

      resolve(`${input} adli kisi eklendi...`);
    }
  });

  return istek;
}

function sonuc() {
  const randomSayi = Math.floor(Math.random() * array.length - 1);

  console.log("**********YEMEGI ÖDEYEN**********");

  console.log(array[randomSayi]);

}

function oyna() {

  function tekrar() {
    kisiEkle()
      .then((data) => console.log(data))
      .then(tekrar)
      .catch(err=>err);
  }

  tekrar();
}

oyna();
