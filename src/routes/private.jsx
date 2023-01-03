import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Entrar from '../templates/Entrar'
import Home from '../templates/Home'

const PrivateRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Entrar />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default PrivateRoutes
