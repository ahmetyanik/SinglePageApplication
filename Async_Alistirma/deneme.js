

async function isimGonder(){

    isim = "ahmet";

    return isim;
}


async function ismiAl(){

    const alinanIsim = await isimGonder();

    console.log(alinanIsim);
}

ismiAl();