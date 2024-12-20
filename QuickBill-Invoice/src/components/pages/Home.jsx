import React from 'react'
import '../Homepage.css'

export default function Home() {
    return (
        <main className="main-homepage">
            <h1>Welcome to the QuickBill company website</h1>
            <h2>Create and delete invoices, and check how we're working towards our financial targets</h2>
            <button>Log in &#8594;</button>
            <h1 className="services-title">Services</h1>
            <div className="services">
            <i class="fa fa-laptop" aria-hidden="true"></i>  
                <div className="service-div">div 1</div>
                <div className="service-div">div 2</div>
                <div className="service-div">div 3</div>
            </div>
        </main>
    )
}