import React from 'react'

function Child(props) {

    let isim = "Ahmet";

    function veriyiMotheraGonder(){

        const inputValue = document.querySelector("input").value;
        props.veriyiAl(inputValue)
    }


    return (
        <div  className="bg-warning p-5 d-flex justify-content-center align-items-center flex-column">
            

          <input />
          <button onClick={veriyiMotheraGonder} className="btn btn-dark">VERIYI GÖNDER</button>  

           
        </div>
    )
}

export default Child
