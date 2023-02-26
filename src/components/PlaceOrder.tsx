import React from 'react'
import { Link } from 'react-router-dom'

function PlaceOrder() {
    return (
        <>
            <Link to={'/payment'} replace>PlaceOrder</Link>
        </>
    )
}

export default PlaceOrder