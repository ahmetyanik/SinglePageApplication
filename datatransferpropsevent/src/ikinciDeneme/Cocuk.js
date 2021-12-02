import React, { useState } from 'react'

function Cocuk(props) {

    const [data,setData] = useState("");

    function sendAnne(){

        props.getData(data)
    }


    function getDataFromInput(e){

        setData(e.target.value);

    }


    return (
        <div style={{minHeight : "50vh" , backgroundColor:"yellow"}}>

       <h1>{props.message} und mein Name ist {data}</h1>

       <input onChange={getDataFromInput} value = {data}/>

       <button onClick={sendAnne} >CLICK ME</button>
            
        </div>
    )
}

export default Cocuk
