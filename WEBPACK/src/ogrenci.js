import axios from "axios";

export default class Ogrenci{

    constructor(ad) {

        this.ad = ad;
        
    }

    adiniSoyle(){
        console.log(`benim adim ${this.ad}`);
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response=>{

        console.log(response.data);
        })
    }
}

