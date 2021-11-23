let userName = localStorage.user;
const title = document.querySelector("h1");



const askUser = () => new Promise(resolve=>{
    
    const answer = prompt("Wie heißt du?");
    if(!answer){
        reject()
    }
    resolve(answer);
})

if(userName){

    title.innerHTML = `Welcome ${userName}`

}else{

   
    getUserName();

}

// application  >>  LocalStotage  >>   ip adresi

async function getUserName(){

        userName = await askUser();
        localStorage.user = userName;   // Bu sekilde kaydediliyor
   

}


