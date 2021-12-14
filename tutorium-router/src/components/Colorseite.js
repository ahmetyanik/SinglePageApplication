import React from 'react'
import { useParams } from 'react-router-dom'

function Colorseite() {

    const parameters = useParams();

    console.log(parameters);

    return (
        <div style={{minHeight:"100vh", backgroundColor:`${parameters.colorName}`}}>
            
        </div>
    )
}

export default Colorseite
