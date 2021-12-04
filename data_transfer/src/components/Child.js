import React from 'react'

function Child({veri,isim, mesaj}) {


    const childMessage="Child";
    function click(){
        mesaj(childMessage)
        console.log(childMessage);
    }
   

    return (
        <div style={{minHeight:"30vh"}} className="bg-warning d-flex justify-content-center align-items-center flex-column">
          
       {veri} - {isim}

       <button onClick={click}>isim</button>
         
        </div>
    )
}

export default Child
