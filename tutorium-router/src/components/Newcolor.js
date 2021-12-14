import React from 'react'
import { Link } from 'react-router-dom';

function Newcolor({colors,setColors}) {

    function getNewColor(){

        const colorNameInput = document.querySelector("#input1");
        const colorValueInput = document.querySelector("#input2");

        const newState = [...colors,{colorName:colorNameInput.value,colorValue:colorValueInput.value}]

        setColors(newState);
    }

   

    return (
        <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
            
        <input id='input1'/>
        <input id='input2' type="color"/>

        <Link to="/colors"> <button onClick={getNewColor}>ADD THIS COLOR</button></Link>

        </div>
    )
}

export default Newcolor
