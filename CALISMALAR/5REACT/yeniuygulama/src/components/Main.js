import React, { useEffect, useState } from 'react'
import Mevsimkarti from './Mevsimkarti';

function Main() {

    const [mevsimler,setMevsimler] = useState([]);

    async function verileriAl(){

        const veriler = await fetch("./Mevsimler.json");

        const verilerJSON = await veriler.json();

        setMevsimler(verilerJSON);       
        
    } 


    useEffect(()=>{     
        
        verileriAl()
    },[]);
    


 
    return (
        <div style={{ minHeight: "90vh" }}>
          <div className="d-flex justify-content-center flex-wrap">

          {
            
              mevsimler.map((mevsim,index)=>{

                return(
                  <Mevsimkarti

                    key = {index}
                    baslik = {mevsim.baslik}  
                    resim = {mevsim.resim} 
                    icerik = {mevsim.icerik}
                    link = {mevsim.link}

                  />
              )})
          }
          
          </div>
        
        </div>
      );
}

export default Main
