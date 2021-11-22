/* 
animalsJSON.forEach((animal) => {
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

    if (animal.isOpen === true) {
      div.style.backgroundImage = animal.image;
    }

    console.log(animal);

    console.log(e.target);
    
  


  });

  

}); */