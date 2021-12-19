class Resim{
 

    async rastgeleResimGetir(sehir){

        this.baseURL = "https://api.unsplash.com",
        this.clientID = "Client-ID swlWll04UM6pF7GHUUM9kIn4lSYZC4yD3pkCZYuXsRQY";
        this.axiosNesnesi = axios.create({
            baseURL : this.baseURL,
            headers : {
                Authorization : this.clientID
            },
            params:{
                query : sehir,
                count : 1

            }

        })


        const rastgeleResim = await this.axiosNesnesi.get("/photos/random");

        return rastgeleResim.data[0].urls.regular;
    }
}