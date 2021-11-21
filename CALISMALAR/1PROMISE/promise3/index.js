function sayiSor() {
  const randomSayi = Math.floor(Math.random() * 6) + 1;
  console.log(randomSayi);
  const input = prompt("Tahmininizi giriniz:");

  const sonuc = new Promise((resolve, reject) => {
    if (!input) {
      reject("Hicbir sayi girmediniz!");
    } else if (isNaN(input)) {
      reject("Lütfen number bir ifade giriniz!");
    } else if (parseInt(input) < 1 || parseInt(input) > 6) {
      reject("Lütfen 1 ile 6 arasinda bir sayi giriniz!");
    } else if (Math.abs(parseInt(input) - randomSayi) > 1) {
      reject("Yanlis tahmin!");
    } else if (Math.abs(parseInt(input) - randomSayi) === 0) {
      resolve(2);
    } else if (Math.abs(parseInt(input) - randomSayi) === 1) {
      resolve(1);
    }
  });

  return sonuc;
}

function oyunaBasla() {
  let num = 0;

  function tekrarla() {
    sayiSor()
      .then((data) => {
        num += data;
        console.log(`Kazandiginiz puan:${data}\nToplam puaniniz:${num}`);
      })
      .then(tekrarla)
      .catch((err) => {
          
        console.log(err)
        console.log(`\nToplam puaniniz:${num}`);
      });
  }

  tekrarla();
}

oyunaBasla();
