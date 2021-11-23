let userName = localStorage.user
const title = document.querySelector('h1')

const askUser = () => new Promise((resolve, reject) => {
  const answer = prompt('Wie heißt du?')
  if(!answer) reject()
  resolve(answer)
})

function setUser() {
  title.innerHTML = `Welcome ${userName}!`
}

async function getUserName() {
  userName = await askUser()
  localStorage.user = userName
  setUser()
}

if(userName) {
  setUser()
} else {
  getUserName()
}