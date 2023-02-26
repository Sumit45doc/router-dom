import React from 'react'
import { NavLink } from 'react-router-dom'

function NavActiveLink() {

    const navStyleLink = ({ isActive }: {isActive: boolean}) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }
    }

    return (
        <nav>
            <NavLink to={'/'} style={navStyleLink}>Home</NavLink>
            <NavLink to={'/about'} style={navStyleLink}> About</NavLink>
        </nav>
    )
}

export default NavActiveLink