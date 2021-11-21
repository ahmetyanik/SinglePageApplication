function guessNumber() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber);

  return new Promise((resolve, reject) => {
    const answer = prompt("Guess a number between 1 and 6");

    if (!answer) {
      reject("Hicbir islem yapilmadi!");
    } else if (isNaN(answer)) {
      reject("Sayi girmeniz gerekirdi!");
    } else if (parseInt(answer) < 1 || parseInt(answer) > 6) {
      reject("Sayinizi 1 ve 6 rakamlari arasinda secmeliydiniz!");
    } else if (Math.abs(randomNumber - parseInt(answer)) === 0) {
      resolve(2);
    } else if (Math.abs(randomNumber - parseInt(answer)) === 1) {
      resolve(1);
    } else {
      reject();
    }
  });
}

function oyunaBasla() {
  let num = 0;

  function tekrar() {
    guessNumber()
      .then((points) => {
        num += points;
        console.log(`Kazandiginiz puan: ${points}\nToplam puan: ${num}`);
      })
      .then(tekrar)
      .catch((err) => {
        console.log(`Toplam puan: ${num}`);
      });
  }

  tekrar();
}

oyunaBasla();
