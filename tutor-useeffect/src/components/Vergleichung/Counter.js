import React, { useEffect, useState } from 'react'

function Counter() {

    const [number,setNumber] = useState(0);

    useEffect(()=>{

        const interval = setInterval(()=>{
            setNumber((n)=>n+1);
        },1000);

        return () => clearInterval(interval);
    })

    return (
        <div>
        <h3>ComponentWillUnmount</h3>
            {number}
        </div>
    )
}

export default Counter
