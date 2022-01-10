import React from 'react'
import { useContext } from 'react'
import DataStore from '../DataStore'

function Like() {
    const {userName} = useContext(DataStore)
    return (
        <div>            
            {userName ? <button>Like</button> : <button>Sign in to like</button>}
        </div>
    )
}

export default Like
