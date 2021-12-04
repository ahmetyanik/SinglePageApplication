import React, { useState } from 'react'
import Child from './Child'

function Mother() {

    const [childdanGelen,setChilddanGelen] = useState("");


    function veriyiChilddanAl(veri){

        setChilddanGelen(veri);

        console.log(childdanGelen);
    }

    return (
        <div style={{minHeight:"100vh"}} className="bg-success d-flex justify-content-center align-items-center flex-column">

        <h1>Child'dan gelen veri:{childdanGelen}</h1>

        <Child veriyiAl = {veriyiChilddanAl} />
            
        </div>
    )
}

export default Mother
