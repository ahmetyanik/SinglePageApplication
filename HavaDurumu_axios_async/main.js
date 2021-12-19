const hava = new Hava();
const resim = new Resim();

const input = document.querySelector("input");
const button = document.querySelector("button");

async function sehriAl() {
  const sehir = input.value;
  const cardArea = document.querySelector(".card-area");

  const havaDurumu = await hava.havaDurumuGetir(sehir);
  const gelenResim = await resim.rastgeleResimGetir(sehir);

  console.log(havaDurumu);

  cardArea.innerHTML = `
    
    <div class="card" style="width: 18rem;">
    <img src=${gelenResim} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${havaDurumu.data.name}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${(havaDurumu.data.main.temp - 273, 15)}</li>      
    </ul>
  </div>
    
    `;
}

button.addEventListener("click", sehriAl);
