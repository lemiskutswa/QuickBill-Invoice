import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import About from './components/pages/About'
import Invoices from './components/pages/Invoices'
import Services from './components/pages/Services'
import Login from './components/pages/Login'
import Home from './components/pages/Home'


function App() {
  return(
    <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/invoices" element={<Invoices />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
    </div>

  )
}

export default App