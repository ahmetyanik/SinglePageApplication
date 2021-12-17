class Screen{

    constructor(){
        this.sakaGetirBtn = document.querySelector(".saka-getir-button");
        this.sakaGetirBtn.addEventListener("click",this.sakaGetir.bind(this))
    }

    async sakaGetir(){
        console.log("tiklandi");

    }
}