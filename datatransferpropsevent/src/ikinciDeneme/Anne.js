import React, { useState } from 'react'
import Cocuk from './Cocuk'

function Anne() {

    const [mother,setMother] = useState("Merkel");

    const [kind,setKind] = useState("");

    function getMessageFromCocuk(gelen){

        setKind(gelen)

    }


    return (
        <div style ={{minHeight:"100vh" , backgroundColor: "red", padding : "100px"}}>

        <h1>ich bin Mutter : {mother}</h1> 
        <br/>
        <h3>ICH KOMME AUS CHILD: {kind}</h3>

        <Cocuk name = {kind} message = "ich bin kind" getData = {getMessageFromCocuk} />
            
        </div>
    )
}

export default Anne
