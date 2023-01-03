import React, { useContext } from 'react'
import { AuthContext } from './contexts/auth'
import PrivateRoutes from './routes/private'
import PublicRoutes from './routes/public'

function App() {
  const { auth } = useContext(AuthContext)

  const getAuth = localStorage.getItem('login')

  return getAuth || auth ? <PrivateRoutes /> : <PublicRoutes />
}

export default App
