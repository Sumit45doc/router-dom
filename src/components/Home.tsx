import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <div>Home</div>
            <Link to={'/place-order'} >Place Order</Link>
        </>
    )
}

export default Home