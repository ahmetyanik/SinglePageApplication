class Hava{


    async havaDurumuGetir(sehir){

        const havaDurumu = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${sehir}&appid=a7ccf39f58624360e151dce17c818ef3`)

        console.log(havaDurumu);
    }

}