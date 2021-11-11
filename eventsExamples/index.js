// CLICK

const click = document.querySelector("#click");
let clickCount = document.querySelector("#click>span>span");


click.addEventListener("click",()=>{

    let wert = parseInt(clickCount.innerText);
    wert++;

    clickCount.innerText = wert;
})

// ENTER

const enter = document.querySelector("#enter");
const enterCount = document.querySelector("#enter>span>span");


enter.addEventListener("mouseover",()=>{


    let wert = parseInt(enterCount.innerText);
    wert++;

    enterCount.innerText = wert;
})


// MOUSE OUT

const out = document.querySelector("#out");
const outCount = document.querySelector("#out>span>span");

out.addEventListener("mouseout",()=>{


    let wert = parseInt(outCount.innerText);
    wert++;

    outCount.innerText = wert;
})


// MOUSE MOVE

const move = document.querySelector("#move");
const moveCount = document.querySelector("#move>span>span");

out.addEventListener("mousemove",()=>{


    let wert = parseInt(moveCount.innerText);
    wert++;

    moveCount.innerText = wert;
})


// KEYPRESS

const press = document.querySelector("#press");
const pressCount = document.querySelector("#press>span>span");

press.addEventListener("keypress",()=>{
    
    let wert = parseInt(pressCount.innerText);
    wert++;

    pressCount.innerText = wert;

    console.log(wert);
})

// SCROLL

const scroll1 = document.querySelector("#scroll");
const scrollCount = document.querySelector("#scroll>span>span");

scroll1.addEventListener("scroll",()=>{    
    
    let wert = parseInt(scrollCount.innerText);
    wert++;

    scrollCount.innerText = wert;

    console.log(wert);
   
})


// DRAG

/* events fired on the draggable target */
document.addEventListener("drag", function(event) {

}, false);

document.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
    // reset the transparency
    event.target.style.opacity = "";
  }, false);

  /* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
    // prevent default to allow drop
    event.preventDefault();
  }, false);
  
  document.addEventListener("dragenter", function(event) {
    // highlight potential drop target when the draggable element enters it
    if (event.target.className == "dropzone") {
      event.target.style.background = "green";
    }
  
  }, false);
  
  document.addEventListener("dragleave", function(event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == "dropzone") {
      event.target.style.background = "";
    }
  
  }, false);


  document.addEventListener("drop", function(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.className == "dropzone") {
      event.target.style.background = "";
      dragged.parentNode.removeChild( dragged );
      event.target.appendChild( dragged );
    }
  }, false);


// BLUR

const input = document.querySelector("#input input");
const message = document.querySelector("#input div");

console.log(input);

input.addEventListener("focus",(e)=>{    
    
    message.innerText = "Now focused";
   
})

input.addEventListener("blur",(e)=>{    
    
    message.innerText = "Now blured";
   
})