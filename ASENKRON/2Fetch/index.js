//Dikkat!!! FETCH YAPISINININ EN ÖNEMLI ÖZELLIGI BIZE PROMISE BIR SONUC VERMESIDIR!!!

// text dosyasi icin

function getTextFile() {
  fetch("example.txt") // Dosya yolumuz
    .then((response) => response.text()) // Text olarak almak istiyoruz
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
}

getTextFile();

// json dosyasi icin

function getJsonFile() {
  fetch("example.json")
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
}

getJsonFile();


// Disardaki rest api'den bilgi almak

function getExternalAPI(){

    fetch("http://api.exchangeratesapi.io/v1/latest?access_key=84254cdd67e8302a8b880de03297aa6f")
    .then(response => response.json())
    .then(data=>data.rates.TRY)
    .then(data=>console.log(data))
    .catch(err=>console.log(err));

}

getExternalAPI();