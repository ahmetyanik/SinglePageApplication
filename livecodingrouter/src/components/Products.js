import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
    return (
        <div>
            <h1>Buy our product</h1>
            <p>Great prices</p>

            <div>
                <Link to="products/hundefutter">Hundefutter</Link>
            </div>
            <div>
                <Link to="products/halsband">Halsband</Link>
            </div>
        </div>
    )
}

export default Products
