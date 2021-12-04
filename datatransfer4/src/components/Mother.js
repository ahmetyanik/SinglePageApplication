import React, { useState } from 'react'
import Child from './Child'

function Mother() {

    const [gelenMessage,setGelenMessage] = useState();

    function veriyiChilddanAl(data){

        setGelenMessage(data)
    }
    
    return (
        <div style={{minHeight:"100vh"}} className="bg-success d-flex justify-content-center align-items-center flex-column">
           

        <h1>CHILD'DAN GELEN MESAJ: {gelenMessage}</h1>

        <Child veriyiAl = {veriyiChilddanAl} />


        </div>
    )
}

export default Mother
