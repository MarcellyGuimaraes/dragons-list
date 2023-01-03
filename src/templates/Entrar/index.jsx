import React, { useContext, useState } from 'react'
import Input from '../../components/Input'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth'

const Entrar = () => {
  const [form, setForm] = useState('')
  const { auth, setAuth } = useContext(AuthContext)
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    if (form.email == 'teste_avocado' && form.senha == 'senha_segura') {
      setAuth(true)
      localStorage.setItem('login', auth)
      navigate('/home')
      window.alert('logado com sucesso')
    } else {
      window.alert('dados inseridos incorretos, tente novamente!')
    }
  }

  return (
    <div className="flex flex-col bg-slate-400 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <p className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        WoopSicredi Challenge
      </p>
      <div className="w-full bg-white bg-opacity-40 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-4 md:space-y-6 sm:p-8"
        >
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Entrar na conta
          </h1>
          <div className="space-y-4 md:space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Usuário
              </label>
              <Input
                type="text"
                placeholder="Usuário: teste_avocado"
                name="email"
                onChange={(e) =>
                  setForm({ ...form, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Senha
              </label>
              <Input
                type="password"
                placeholder="Senha: senha_segura"
                name="senha"
                onChange={(e) =>
                  setForm({ ...form, [e.target.name]: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Entrar
