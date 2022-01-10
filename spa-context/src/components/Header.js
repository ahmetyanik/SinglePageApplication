import React from 'react'
import DataStore from '../DataStore'
import { useContext } from 'react'

function Header() {
    const {userName} = useContext(DataStore)

    return (
        <header>
            {userName ? "✔ " + userName  : <button>Sign in</button> }
        </header>
    )
}

export default Header
