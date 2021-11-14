const isNum = function (param) {
  const result = new Promise((resolve, reject) => {
    if (typeof param === "number") {
      resolve(`${param} bir sayidir.`);
    } else {
      reject(`${param} bir sayi degildir`);
    }
  });

  return result;
};

isNum("ahmet")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
