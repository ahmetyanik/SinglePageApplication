const main = document.querySelector("main");
let animals;
let openAnimalNumber = 0;
let openedArray = [];

async function startGame() {
  let randomNumber;
  
  const animals = await fetch("animal.json");
  const animalsJSON = await animals.json();
  
  return animalsJSON;  
  
}



function addToMain(){

  animalNumber = animals.length;

  animals.forEach((animal) => {
    randomNumber = Math.floor(Math.random() * animalNumber);
    
    const div = document.createElement("div");
    div.style.backgroundImage = animal.image;
    div.style.display = "flex";
    div.style.order = randomNumber;
    main.appendChild(div);
    animalNumber--;

  
    // if isOpen of animals are false, give them cover background 
  
    if (animal.isOpen === false) {
      div.style.backgroundImage =
        "url('https://teknosafari.net/wp-content/uploads/2020/10/ucretsiz-en-iyi-wallpaper-siteleri-12.jpg')";
    } 
  
  
    // Wenn you click a div :
  
    div.addEventListener("click", (e) => {
      e.stopPropagation();
  
  
      animal.isOpen = true;     // Give the new value for isOpen
      openAnimalNumber++;       // Add number of animal +1 
  


      openedArray.push(animal);

      console.log(animals);

      console.log(openedArray);


      if(openedArray.length===3){

        console.log("hello");
  
        animals.forEach(animal=>{
  
          if(animal.name === openedArray[0] || animal.name === openedArray[1]){
  
            animal.isOpen = true;
          }else{
  
            animal.isOpen = false;
          }
        })
  
        openedArray = [];
        console.log(openedArray);
  
    }

 
  
    }); 
    
    
   






  
  });


  console.log(animals);

}






startGame()
.then(data=>animals = data)
.then(addToMain)





