import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <div>Home</div>
            <Link to={'/place-order'} state={{ price: 1000 }} >Place Order</Link>
        </>
    )
}

export default Home