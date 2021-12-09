import React, { useState } from 'react'

function Controls({dispatch}) {

    const [animalState, setAnimalState] = useState({

        name : "",
        content : "",
        image : "",
        link : ""
    })

    function inputChange(e){

        let dataVonInput = e.target.value;

        setAnimalState({...animalState,[e.target.name]:dataVonInput})        
    }


    function sendDataToMain(){

        dispatch({type:"add", payload :{newAnimal:animalState}})

    }



    return (
        <div className='d-flex justify-content-center align-items-center flex-column mt-2'>
            
          <input name='name' onChange={inputChange} placeholder='Animal Name'/>  
          <input name="content" onChange={inputChange} placeholder='Content'/>  
          <input name="image" onChange={inputChange} placeholder='Image address'/>  
          <input name="link" onChange={inputChange} placeholder='Wikipedia Link'/>  

          <button onClick={sendDataToMain} className='btn btn-success mt-2'>SAVE THE ANIMAL</button>


        </div>
    )
}

export default Controls
