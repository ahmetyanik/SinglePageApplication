import React from 'react'

function Child({getData,getDataInput}) {

    let myName = "AHMET";

    let fromInput = "";

    function sendDataToMother(){

        getData(myName);

    }

    function sendDataFromInputToMother(){

        const inputValue = document.querySelector("input").value;

        fromInput = inputValue;

        getDataInput(fromInput);

    }


    return (
        <div className="bg-warning p-5">

        
        <input/>

        <button onClick={sendDataToMother} className="btn btn-info">SEND MY NAME</button>

        <button onClick={sendDataFromInputToMother} className="btn btn-dark">SEND INPUT VALUE</button>


        </div>
    )
}

export default Child
