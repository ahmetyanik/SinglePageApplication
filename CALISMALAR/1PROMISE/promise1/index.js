

function getData() {

  const result = new Promise((resolve) => {

    setTimeout(() => {
      resolve();
    }, 3000);
    
  });

  return result;
}

getData()
  .then((data) => console.log("Ahmet"))
  .then((data) => console.log("Murat"));
