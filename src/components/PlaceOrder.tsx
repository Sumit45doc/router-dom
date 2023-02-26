import { Link, useLocation } from 'react-router-dom'

function PlaceOrder() {
    // state from where the page is navigated
    const { state } = useLocation()

    return (
        <>
            <Link to={'/payment'} replace>PlaceOrder</Link>
            <p>Price of order: {state.price}</p>
        </>
    )
}

export default PlaceOrder