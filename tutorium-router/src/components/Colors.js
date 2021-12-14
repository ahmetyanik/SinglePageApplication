import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

function Colors({colors}) {
    return (
        <div>
            <Header/>

            <h3>Please select a color</h3>

            <div>

                {
                   colors.map(element=>{

                       return(
                         <Link to={`/colors/${element.colorName.toLowerCase()}`}>  <p>{element.colorName}</p></Link>
                       )
                   }) 
                }

            </div>


        </div>
    )
}

export default Colors
