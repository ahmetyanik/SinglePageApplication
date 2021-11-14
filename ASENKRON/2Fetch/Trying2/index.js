function getDatas() {
  fetch("example.json")
    .then((data) => data.json())
    .then((data) => console.log(data));
}

getDatas();
