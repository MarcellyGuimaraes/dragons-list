import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Cadastrar = () => {
  const [email, setEmail] = useState('')
  const [emailConf, setEmailConf] = useState('')
  const [senha, setSenha] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const { signup } = useAuth()

  const handleCadastrar = () => {
    if (!email | !emailConf | !senha) {
      setError('Preencha todos os campos')
      return
    } else if (email !== emailConf) {
      setError('Os e-mails não são iguais')
      return
    }

    const res = signup(email, senha)

    if (res) {
      setError(res)
      return
    }

    alert('Usuário cadatrado com sucesso!')
    navigate('/')
  }

  return (
    <div className="h-screen font-sans bg-cover bg-slate-700">
      <div className="container mx-auto h-full flex flex-1 justify-center items-center">
        <div className="w-full max-w-lg">
          <div className="leading-loose">
            <form className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
              <p className="text-white font-medium text-center text-lg font-bold">
                Cadastre-se
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
                <label className="block  text-sm text-white">
                  Confirme seu email
                </label>
                <Input
                  type="email"
                  placeholder="Confirme seu E-mail"
                  value={emailConf}
                  onChange={(e) => [setEmailConf(e.target.value), setError('')]}
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
                <Button Text="Inscrever-se" onClick={handleCadastrar} />
              </div>
              <div className="text-center">
                <p>
                  Já tem uma conta?
                  <strong>
                    <Link
                      className="inline-block right-0 align-baseline font-light text-sm text-500"
                      to="/"
                    >
                      &nbsp;Entre
                    </Link>
                  </strong>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cadastrar
