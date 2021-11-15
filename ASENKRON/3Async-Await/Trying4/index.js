

function getPersons(){

    return fetch("kisiler.json");
}

getPersons().then(data=>data.json()).then(data=>data.push(9)).then(data=>data).then(data=>console.log(data))