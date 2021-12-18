class Screen{

    constructor(){
        this.sakaGetirBtn = document.querySelector(".saka-getir-button");
        this.sakaGetirBtn.addEventListener("click",this.sakaGetir.bind(this))
    }

    async sakaGetir(){
        
        const randomImage = await new UnsplashApi().randomResimGetir();
        const randomJoke = await new JokeApi().randomSakaGetir();

        this.ekranaSonuclariYazdir(randomImage,randomJoke);


    }

    ekranaSonuclariYazdir(randomImage,randomJoke){
        document.querySelector(".sonuc").innerHTML = `
        <div class="card">
        <div class="card-image">
          <figure class="image is-16by9">
            <img
              src=${randomImage}
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4 has-text-danger">${randomJoke}</p>
            </div>
          </div>
        </div>
      </div>
        `
    }
}