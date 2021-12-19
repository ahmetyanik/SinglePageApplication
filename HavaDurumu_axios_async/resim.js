class Resim{

    constructor(){
        this.baseURL = "https://api.unsplash.com",
        this.clientID = "Client-ID --wPOZdbWxyy-CnUscNeJRbTHJwvSP7xRqdl1KH2b2Y";
        this.axiosNesnesi = axios.create({
            baseURL : this.baseURL,
            headers : {
                Authorization : this.clientID
            },
            params:{
                query : "cat",
                count : 1

            }

        })
    }


    async rastgeleResimGetir(sehir){

        this.axiosNesnesi.params.query = sehir;

        const rastgeleResim = await this.axiosNesnesi.get("/photos/random");

        console.log(rastgeleResim.data[0].urls.regular);

        return rastgeleResim.data[0].urls.regular;
    }
}