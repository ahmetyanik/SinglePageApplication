class UnsplashApi{
    constructor(){
        this.baseURL = "https://api.unsplash.com";
        this.clientID = "Client-ID swlWll04UM6pF7GHUUM9kIn4lSYZC4yD3pkCZYuXsRQ"
        this.axiosNesne = axios.create({
            baseURL : this.baseURL,
            headers:{
                Authorization : this.clientID
            },
            params:{
                query : "animal",
            }
        })
    }

    async randomResimGetir(){

        try{

            const resimResponse = await this.axiosNesne.get("/photos/random");            
            console.log(resimResponse);
            
        }catch(error){

            console.log(error);

        }

    }
}