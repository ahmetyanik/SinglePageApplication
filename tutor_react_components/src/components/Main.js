import React, { useState } from 'react'

export default function Main() {

    let [name,setName] = useState("ahmet");

    function changeName(){
        
        setName(prompt("Your name"));
    }

    

   

    return (
        <div className ="bg-info" style = {{minHeight:"80vh"}}>Hier ist {name}'s Bereich.

        <button onClick={changeName} className="btn btn-dark">CHANGE NAME</button>
        
        </div>
    )
}
