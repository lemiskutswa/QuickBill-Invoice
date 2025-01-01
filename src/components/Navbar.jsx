import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {

    const [ menuOpen, setMenuOpen ] = useState(false);

    function handleMenu() {
            setMenuOpen(!menuOpen);   
    }
    return(
        <nav>
            <Link to="/" className="logo">QuickBill</Link>

            <div className="menu" onClick={handleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/invoices">Invoices</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/signup">SignUp</NavLink>
                </li>
            </ul>
        </nav>
    )
}