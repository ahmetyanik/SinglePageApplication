import React, { useState } from 'react'
import Child from './Child';

function Mother() {

    const suppe = "Kürbis suppe";

    const [messageFromChild,setMessageFromChild] = useState("");

    function getDataFromChild(data){

        setMessageFromChild(data);
    }

    return (
        <div className="min-vh-100 bg-dark text-white d-flex justify-content-center align-items-center flex-column">

        <div className="mb-5">My child's message:{messageFromChild}</div>

        <Child essen = {suppe} sendMother = {getDataFromChild} />      
        </div>
    )
}

export default Mother;
