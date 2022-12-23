import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Entrar = () => {
  const { signin } = useAuth()
  let navigate = useNavigate()

  const [user, setUser] = useState('')
  const [senha, setSenha] = useState('')
  const [error, setError] = useState('')

  const handleLogin = () => {
    if (!user | !senha) {
      setError('Preencha todos os campos')
      return
    }

    const res = signin(user, senha)

    if (res) {
      setError(res)
      return
    }

    navigate('/home')
  }

  return (
    <div className="flex flex-col bg-slate-400 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <p className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        WoopSicredi Challenge
      </p>
      <div className="w-full bg-white bg-opacity-40 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Entrar na conta
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Usuário
              </label>
              <Input
                type="text"
                placeholder="Usuário: teste_avocado"
                value={user}
                onChange={(e) => [setUser(e.target.value), setError('')]}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Senha
              </label>
              <Input
                type="password"
                placeholder="Senha: senha_segura"
                value={senha}
                onChange={(e) => [setSenha(e.target.value), setError('')]}
              />
            </div>
            <span className="font-bold text-red-500">{error}</span>
            <Button Text="Entrar" onClick={handleLogin} />
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Não tem uma conta?{' '}
              <Link
                to="/cadastrar"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Registre-se
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Entrar
