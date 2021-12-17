let acikElemanlar = 0;
let ikiElement = ["deneme", "deneme"];
const main = document.querySelector("main");
const divler = document.querySelectorAll("main>div");
const button = document.querySelector("button");
const hamle = document.querySelector("#hamle");
let gonderilmisMain;
let hamleSayisi = 0;

async function verileriAl() {
  const tumHayvanlar = await fetch("animal.json");
  const tumHayvanlarJSON = await tumHayvanlar.json();

  return tumHayvanlarJSON;
}

async function hayvanlariMaineGonder() {
  main.innerText = "";

  const tumHayvanlar = await verileriAl();

  tumHayvanlar.forEach((hayvan) => {
    const div = document.createElement("div");
    div.style.backgroundImage = hayvan.image;
    div.style.display = "flex";
    div.style.order = Math.floor(Math.random() * tumHayvanlar.length);
    div.style.backgroundImage = hayvan.closedImage;
    div.setAttribute("name", hayvan.name);
    div.setAttribute("isopen", hayvan.isOpen);
    div.setAttribute("image", hayvan.image);
    div.setAttribute("closedImage", hayvan.closedImage);
    div.setAttribute("matched", hayvan.matched);

    main.appendChild(div);
  });

  return main;
}

button.addEventListener("click", () => {
  hamleSayisi = 0;
  hamle.innerText = `${hamleSayisi}`;
  hayvanlariMaineGonder();

  console.log(main);

  button.innerText = "YENI OYUN";

});

console.log(ikiElement);

main.addEventListener("click", (e) => {
  console.log(ikiElement);
  let element = e.target;
  const divler = document.querySelectorAll("main>div");
  console.log(divler);

  if (acikElemanlar < 2) {
    if (element.getAttribute("isopen") === "false") {
      element.setAttribute("isopen", "true");
      element.style.backgroundImage = element.getAttribute("image");
      acikElemanlar++;
      hamleSayisi++;
      console.log(acikElemanlar);
      console.log(element);

      ikiElement.push(element);
      ikiElement.shift(element);

      kontrol();
    }
  } else {
    divler.forEach((div) => {
      div.setAttribute("isopen", "false");
      div.style.backgroundImage = div.getAttribute("closedImage");
      acikElemanlar = 0;
    });
  }

  hamle.innerText = `${hamleSayisi}`;
  hamle.style.fontSize = "5rem";


  console.log(num);

});

async function kontrol() {
  console.log(main);

  console.log("kontrolde");

  if (acikElemanlar >= 2) {
    console.log(ikiElement);

    console.log("iki eleman acildi");
    console.log(ikiElement);


    if (
      ikiElement[0].getAttribute("name") ===
      ikiElement[1].getAttribute("matched")
    ) {
      document.querySelectorAll("main>div").forEach((div) => {
        console.log(div.getAttribute("name"));

        if (
          div.getAttribute("name") === ikiElement[0].getAttribute("name") ||
          div.getAttribute("name") === ikiElement[1].getAttribute("name")
        ) {
          console.log(div);

          div.style.backgroundImage = div.getAttribute("image");
          div.setAttribute("closedImage", div.getAttribute("image"));
        }
      });
    }
  }


 
}
