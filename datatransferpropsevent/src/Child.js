import React from 'react'

function Child(props) {

    let child = "Ben child'dan geliyorum.";


    function sendMother(){

        props.onButton(child)


    }

    return (
        <div style={{minHeight:"20vh", backgroundColor:"yellow"}}>          

            <button onClick={sendMother} >SEND to MOTHER</button>

        </div>
    )
}

export default Child
