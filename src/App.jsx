import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import About from './components/pages/About'
import Invoices from './components/pages/Invoices'
import Dashboard from './components/pages/Dashboard'
import Login from './components/pages/Login'
import Home from './components/pages/Home'
import SignUp from './components/pages/SignUp'


function App() {
  return(
    <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/invoices" element={<Invoices />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
        </Routes>
    </div>

  )
}

export default App