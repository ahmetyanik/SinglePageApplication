
const form = document.querySelector("#form");

const input = document.querySelector("#input");

// keypress ===> Klavyede hangi tusa basildigini gösterir. SADECE RAKAMLAR VE HARFLER ICIN GECERLIDIR


document.addEventListener("keypress",run);

function run(e){

    console.log(e.which); // ASCII degeri verir.

    console.log(e.key);   // Klavyede bastigimiz karakteri verir.
    
}



// keydown  ===> Klavyedeki hangi tusa basilirsa basilsin o tusun degerini gösterir
//               Tusa basilir basilmaz event tetiklenir.  

document.addEventListener("keydown",run);

function run(e){

    console.log(e.which); // ASCII degeri verir.

    console.log(e.key);   // Klavyede bastigimiz karakteri verir.
    
}



// keyup  ===> Klavyedeki hangi tusa basilirsa basilsin o tusun degerini gösterir
//               Tusa BIRAKILDIGINDA event tetiklenir. 


document.addEventListener("keyup",run);

function run(e){

    console.log(e.which); // ASCII degeri verir.

    console.log(e.key);   // Klavyede bastigimiz karakteri verir.
    
}