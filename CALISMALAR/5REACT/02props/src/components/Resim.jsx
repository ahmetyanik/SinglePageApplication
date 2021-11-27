import React from 'react'

function Resim(props) {
    return (
        <div>
            <img className="resim" style={{width: "500px", height : "300px"}} src = {props.resimAdresi} alt="resim"/>
        </div>
    )
}

export default Resim
