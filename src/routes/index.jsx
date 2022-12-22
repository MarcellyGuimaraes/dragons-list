import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Cadastrar from '../templates/Cadastrar'
import Entrar from '../templates/Entrar'
import Home from '../templates/Home'

const Private = () => {
  const signed = useAuth()

  return signed.signed == true ? <Home /> : <Entrar />
}

const Rotas = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/home" element={<Private />} exact />
          <Route path="/" element={<Entrar />} />
          <Route path="/cadastrar" element={<Cadastrar />} exact />
          <Route path="*" element={<Entrar />} />
        </Routes>
      </>
    </Router>
  )
}

export default Rotas
