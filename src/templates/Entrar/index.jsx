import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Entrar = () => {
  const { signin } = useAuth()
  let navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [error, setError] = useState('')

  const handleLogin = () => {
    if (!email | !senha) {
      setError('Preencha todos os campos')
      return
    }

    const res = signin(email, senha)

    if (res) {
      setError(res)
      return
    }

    navigate('/home')
  }

  return (
    <div className="h-screen font-sans bg-cover bg-slate-700">
      <div className="container mx-auto h-full flex flex-1 justify-center items-center">
        <div className="w-full max-w-lg">
          <div className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
            <p className="text-white font-medium text-center text-lg font-bold">
              Entrar
            </p>
            <div className="">
              <label className="block text-sm text-white" htmlFor="email">
                E-mail
              </label>
              <Input
                type="email"
                placeholder="Digite seu E-mail"
                value={email}
                onChange={(e) => [setEmail(e.target.value), setError('')]}
              />
            </div>
            <div className="mt-2">
              <label className="block  text-sm text-white">Senha</label>
              <Input
                type="password"
                placeholder="Digite sua Senha"
                value={senha}
                onChange={(e) => [setSenha(e.target.value), setError('')]}
              />
            </div>

            <div className="mt-4 items-center flex justify-between">
              <Button Text="Entrar" onClick={handleLogin} />
            </div>
            <div className="text-center">
              <Link
                to="/cadastrar"
                className="inline-block right-0 align-baseline font-light text-sm text-500"
              >
                &nbsp;Registre-se
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Entrar
