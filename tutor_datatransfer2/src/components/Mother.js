import React, { useState } from 'react'
import Child from './Child'

function Mother() {   

    const [messageFromChild, setMessageFromChild] = useState("");



    function getDataFromChild(param){

        setMessageFromChild(param)
    }

    function getDataFromInput(param){

        setMessageFromChild(param);
    }


    return (
        <div className="bg-success d-flex justify-content-center align-items-center flex-column" style={{minHeight :"100vh"}}>

        <h1>Mein child said to me: {messageFromChild}</h1>
            
        <Child getData={getDataFromChild} getDataInput={getDataFromInput}/>

        </div>
    )
}

export default Mother
