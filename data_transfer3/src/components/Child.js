import React from 'react'

function Child(props) {

    
    function veriyiMotheraGönder(){
        
        let message = document.querySelector("input").value;
        props.veriyiAl(message);
    }
    

    return (
        <div className="bg-warning p-5 d-flex justify-content-center align-items-center flex-column">

        <input/>

        <button onClick={veriyiMotheraGönder}>VERIYI MOTHERA GÖNDER</button>  
        
        </div>
    )
}

export default Child
