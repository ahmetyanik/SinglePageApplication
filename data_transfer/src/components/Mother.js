import React, { useState } from 'react'
import Child from './Child'

function Mother() {

  //let message= "sdkaskdls";

  const [message, setMessage] = useState("sdkaskdls");

  function mesajAl(data){

    setMessage(data)

  }


    return (
        <div style={{minHeight:"100vh"}} className="bg-success d-flex justify-content-center align-items-center flex-column">

        <h1>Cocuktan gelen mesaj:{message}</h1>
            
            <Child 
                veri={message}
                isim = {"ahmet"}
                mesaj = {mesajAl}
            />
       

        </div>
    )
}

export default Mother
