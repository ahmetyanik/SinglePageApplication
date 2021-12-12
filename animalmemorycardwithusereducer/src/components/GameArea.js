import React from 'react'

function GameArea({state,dispatch}) {

    
    return (
        <div className='d-flex justify-content-center align-items-center flex-wrap mt-2'>
            {
                state.map((animal,index)=>{

                    return(                       

                        <div key={index}   className='m-1' style={{display:"flex", backgroundImage:animal.isOpen ? animal.closedImage : animal.image , width:"200px",height:"200px", backgroundRepeat:"no-repeat", backgroundSize: "cover", backgroundPosition:"center",order:Math.floor(Math.random()*24)}}></div>   

                      
                    )
                })
            }
        </div>
    )
}

export default GameArea
