async function getData() {
  
  const result =  await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((data) => data.json())
    .then((data) => console.log(data));

    console.log("Hello");

    return result;
}

getData();