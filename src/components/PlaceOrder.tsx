import { Link, useLocation, useNavigate } from 'react-router-dom'

function PlaceOrder() {
    // state from where the page is navigated
    const { state } = useLocation()
    const navigate = useNavigate()
    const number = Math.floor(Math.random() * 10)
    const itemCount = number > 5;
    
    const handleOnClick = () => {
        if (itemCount) navigate('/payment', {replace: true}); 
    }

    return (
        <>
            <Link to={'/payment'} replace>PlaceOrder</Link>
            <p>Price of order: {state.price} </p>
            <p>Item available: {itemCount ? 'available': 'unavailable'}</p>
            <button onClick={handleOnClick}>Place order programatically</button>
        </>
    )
}

export default PlaceOrder