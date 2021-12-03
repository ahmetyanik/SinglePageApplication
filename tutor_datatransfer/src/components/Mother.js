import React, { useState } from 'react'
import Child from './Child'


function Mother() {
    
    const [dataFromChild,setDataFromChild] = useState("");

    function getDataFromChild(message){

        setDataFromChild(message);

    }

    function getDataFromChildFromInput(data){

        setDataFromChild(data)
    }


    return (
        <div className="bg-success d-flex justify-content-center align-items-center flex-column" style={{minHeight:"100vh"}}>

        <h1>Mein child sagt mir: {dataFromChild}</h1>

        <Child text ="Hi mein Baby..." getData = {getDataFromChild} getInputData={getDataFromChildFromInput}/>
            
        </div>
    )
}

export default Mother
