function getData(param) {

  const result = new Promise((resolve, reject) => {
    if (typeof param === "string") {
      resolve(`${param} bir stringdir...`);
    } else {
      reject(`${param} bir string degildir!!!`);
    }
  });

  return result;
}

getData("ali")
  .then((data) => data)
  .then((data) => console.log(data))
  .catch(err=>console.log(err))

