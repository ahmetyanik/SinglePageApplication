import React from 'react'
import { Link } from 'react-router-dom'

function Anasayfa() {
    return (
        <div style={{minHeight:"100vh", backgroundColor:"red"}}>
            Burasi Anasayfa

        <Link to="/davul">Buraya Tikla</Link>

        </div>
    )
}

export default Anasayfa
