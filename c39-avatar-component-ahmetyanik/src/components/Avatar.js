import React from 'react'
import './main.css'

function Avatar(props) {
    return (
        <div>
        
        <img src="https://picsum.photos/400/400"  className={`${props.type}  ${props.size}`} alt="img"/>

        
        </div>
    )
}

export default Avatar
