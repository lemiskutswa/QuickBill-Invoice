import React from 'react'
import '../Homepage.css'

export default function Home() {
    return (
        <main className="main-homepage">
            <h1>Welcome to the QuickBill company website</h1>
            <h2>Create and delete invoices, and check how we're working towards our financial targets.</h2>
            <span>Let's work together!</span>
            <div className="login-signup">
                <button className="login-btn">Log in &#8594;</button>
                <button className="signup-btn">Sign Up </button>
            </div>
            <h1 className="services-title">Services</h1>
            <div className="services">
            
                <div className="service-div">
                    <i className="fa fa-laptop" aria-hidden="true"></i>
                    <p className='service-title'>Invoice Monitoring</p>
                    <p className='service-description'>Check how many invoices we've sent and how much payment is coming in.</p>
                </div>
                <div className="service-div">
                    <i className="fa fa-line-chart" aria-hidden="true"></i>
                    <p className='service-title'>Revenue Tracking</p>
                    <p className='service-description'>See how much we've collected monthly, quartely, and annually. Find out if we're meeting our targets</p>
                </div>
                <div className="service-div">
                    <i class="fa fa-id-card-o" aria-hidden="true"></i>
                    <p className='service-title'>Customers Dashboard</p>
                    <p className='service-description'>Find out how customers are meeting their payment deadlines. Who are our most profitable customers?</p>
                </div>
            </div>
            <footer>QuickBill © All Rights Reserved 2025</footer>
        </main>
    )
}