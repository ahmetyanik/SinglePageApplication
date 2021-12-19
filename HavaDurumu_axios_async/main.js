
const hava = new Hava();
const resim = new Resim();



const input = document.querySelector("input");
const button = document.querySelector("button");


async function sehriAl(){

    const sehir = input.value;
    console.log(sehir);

    const havaDurumu = await hava.havaDurumuGetir(sehir);
    const gelenResim = await resim.rastgeleResimGetir();

    console.log(havaDurumu);

}

button.addEventListener("click",sehriAl)






