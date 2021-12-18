class UnsplashApi {
  constructor() {
    this.baseURL = "https://api.unsplash.com";
    this.clientID = "Client-ID --wPOZdbWxyy-CnUscNeJRbTHJwvSP7xRqdl1KH2b2Y";
    this.axiosNesne = axios.create({
      baseURL: this.baseURL,
      headers: {
        Authorization: this.clientID,
      },
      params: {
        query: "cat",
        count: 1
      },
    });
  }

  async randomResimGetir() {
    try {
      const resimResponse = await this.axiosNesne.get("/photos/random");
      return resimResponse.data[0].urls.regular;
    } catch (error) {
      console.log(error);
      return "https://i.stack.imgur.com/6M513.png"
    }
  }
}
