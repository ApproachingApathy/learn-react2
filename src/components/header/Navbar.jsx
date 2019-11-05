import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <ul className='nav-list'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/books'>Books</Link>
            </li>
            <li>
                <Link to='/books/1'>My Book</Link>
            </li>
        </ul>
    )
}