// PROMISE

function getData(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof data === "string") {
        resolve("Olumlu sonuc");
      } else {
        reject("Olumsuz sonuc");
      }
    }, 5000);
  });
}

/* 
getData(123)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (response) {
    console.log(response);
  });

 */

// ARROW ILE

getData(123)
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

// PROMISE'IN ICINDE RETURN ILE DEGER DÖNDÜRMEK

/// Promise'in icinde return ile deger döndürülürse bu degeri almak icn bir then daha kullanilir.animal

function addTwo(number) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (typeof number === "number") {
        resolve(number + 2);
      } else {
        reject("Lütfen bir sayi girin");
      }
    }, 3000);
  });
}

addTwo(10)
  .then((response) => {
    console.log(response);
    return response + 2;
  })
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
