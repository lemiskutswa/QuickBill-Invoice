import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return(
        <nav>
            <Link to="/">QuickBill</Link>
            <ul>
                <li>
                    <Link to="/invoices">Invoices</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/login">Log in</Link>
                </li>
            </ul>
        </nav>
    )
}