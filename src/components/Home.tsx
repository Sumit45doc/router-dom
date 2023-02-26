import {Link} from 'react-router-dom'

function Home() {
    return (
        <>
            <div>Home</div>
            <Link to={'/about'}>Go to About page</Link>
        </>
    )
}

export default Home