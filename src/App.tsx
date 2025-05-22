import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import About from './components/pages/About'
import Invoices from './components/pages/Invoices'
import Dashboard from './components/pages/Dashboard'
import Login from './components/pages/Login'
import Home from './components/pages/Home'
import SignUp from './components/pages/SignUp'
import AuthForm from "./components/ui/AuthForm";

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
          <Route path="/log-in" element={<AuthForm type="log-in" />} />
          <Route path="/sign-up" element={<AuthForm type="sign-up" />} />
        </Routes>
    </div>

  )
}

export default App