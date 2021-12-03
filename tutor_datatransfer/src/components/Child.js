import React from 'react'

function Child({text,getData,getInputData}) {


    const message = "Danke";

    let inputMessage = "";

    function sendDataToMother(){

        getData(message);
    }

    function sendValueFromInput(e){

        const value = document.querySelector("input").value;

        inputMessage = value;

        console.log(inputMessage);

        getInputData(inputMessage)

    }

    return (
        <div className="bg-warning p-5">
            
        <input  className = "rounded mx-2"/>

        <button onClick = {sendDataToMother} className="btn btn-info">SEND CONSTANT MESSAGE</button>  

        <button onClick={sendValueFromInput} className="btn btn-dark">SEND INPUT MESSAGE</button>

        </div>
    )
}

export default Child
