import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Footer from '../Footer'
import Navbar from '../Navbar'

function Kategori() {

    const params = useParams();


    console.log(params);
 
    const [kitaplar, setKitaplar] = useState([{},{},{},{},{},{},{},{},{}]);
   
    async function kitaplariAl() {
      const kitaplarJSON = await fetch("/kitaplar.json");
      const kitaplarArray = await kitaplarJSON.json();  
      
      setKitaplar(kitaplarArray);
 
    }
    
    useEffect(() => kitaplariAl(), []);


    return (
        <div>
            <Navbar/>

            <div className='d-flex justify-content-center'>
            
            {
                kitaplar.map((kitap,index)=>{
    
                        console.log(kitap, params.tur)
                    return (


                        kitap.kategori === params.tur ?
                        <div
                  key={index}
                  className="card m-1"
                  style={{ width: "18rem", height: "30rem" }}
                >
                  <img
                    src={kitap.resimlinki}
                    className="card-img-top"
                    alt="..."
                    style={{ width: "100%", height: "50%" }}
                  />
                  <div id="card-body" className="card-body">
                    <h5 className="card-title">{kitap.kitapismi}</h5>
                    <p className="card-text">{kitap.yayinevi}</p>
                    <Link to={`/book/${kitap.kitapismi}`}>
                      
                      <button className="btn btn-primary">{kitap.kitapismi}</button>
                    </Link>
                  </div>
                </div> : null
                    )
                })
            }
            </div>

            <Footer/>
        </div>
    )
}

export default Kategori
