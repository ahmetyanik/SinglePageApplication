import React from 'react'

function Child(props) {

    let child = "Ben child'dan geliyorum.";


    const sendMother=()=>{

        props.onButton("hello")


    }

    return (
        <div style={{minHeight:"20vh", backgroundColor:"yellow"}}>          

            <button onClick={sendMother} >SEND to MOTHER</button>

        </div>
    )
}

export default Child
