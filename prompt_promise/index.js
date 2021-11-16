function askQuestion(q) {
  return new Promise((resolve, reject) => {
    const answer = prompt(q);
    resolve(answer);
  });
}

function nextQuestion() {
  askQuestion("Was ist deine Lieblingsfarbe?")
    .then((answer) => {
      document.body.style.backgroundColor = answer;
    })
    .then(() => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(), 0);
      });
    })

    .then(nextQuestion);
}

nextQuestion();
