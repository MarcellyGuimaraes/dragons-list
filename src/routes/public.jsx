import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Entrar from '../templates/Entrar'

const PublicRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Entrar />} />
      </Routes>
    </Router>
  )
}

export default PublicRoutes
