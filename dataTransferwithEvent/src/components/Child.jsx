import React from 'react'

let message = "";

function Child({essen,sendMother}) {


    function sendMessage(){

        sendMother(message);
    }

    function getDataFromInput(e){

        sendMother(e.target.value)
        message = e.target.value;
    }

    

    return (
        <div className="bg-warning p-5 text-dark">
        <div>My mother send me  : {essen}</div>

        <input onChange={getDataFromInput}/>

        <button onClick={sendMessage} className="btn btn-success">SEND MOTHER YOUR MESSAGE</button>
        </div>
    )
}

export default Child
