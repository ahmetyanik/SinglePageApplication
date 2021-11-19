
// Load weather data

async function getWeather(){

    // 1. Promise : Der Server wird antworten

    const response = await fetch("https://api.brightsky.dev/weather?lat=52&lon=7.6&&date=2021-11-16");

    // 2. Promise :  Der Server wird alle Daten geschickt haben.

    const data = await response.text(); 

    const newData = JSON.parse(data);

    console.log(newData);

    console.log(data);

}


getWeather();