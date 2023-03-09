import { Outlet, useSearchParams } from 'react-router-dom'

const users = [
    { name: 'malika', active: false },
    { name: 'lobo', active: true },
    { name: 'sachin', active: false },
    { name: 'binod', active: true }
]

export default function User() {
    const [searchParams, setSearchParams] = useSearchParams()

    const handleActiveFilter = () => {
        setSearchParams({ filter: 'active' })
    }

    const handleResetFilter = () => {
        setSearchParams({});
    }

    const showActiveUser = searchParams.get('filter') === 'active';

    const showUsers = showActiveUser ? users.filter(user => user.active) : users

    return (
        <>
            <div>Users</div>
            <Outlet />
            <br />
            {showUsers.map((user) => <div>{user.name}</div>)}
            <div>
                <button onClick={handleActiveFilter}>Active user</button>
                <button onClick={handleResetFilter} >Reset filter</button>
            </div>
        </>
    )
}
