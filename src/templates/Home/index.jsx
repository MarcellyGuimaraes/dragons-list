import React, { useEffect, useState } from 'react'
import api from '../../api'
import ModalAdd from '../../components/Modais/ModalAdd'
import HeaderTable from '../../components/Table/HeaderTable'
import LineTable from '../../components/Table/LineTable'

const Home = () => {
  const [users, setusers] = useState()
  const [showAdd, setShowAdd] = useState(false)
  const [modalAdd, setModalAdd] = useState()

  const init = () => {
    api
      .get('/users')
      .then((response) => setusers(response.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err)
      })
  }

  useEffect(() => {
    init()
  }, [])

  if (!users) return null

  return (
    <div
      className={`pt-9 bg-slate-400 ${
        users.length <= 18 ? 'h-screen' : 'h-full'
      }`}
    >
      <h1 className="mb-7 text-center text-xl font-bold">Tabela de usuários</h1>
      <div className="flex flex-col justify-center">
        <span className="text-sm w-full text-sm md:w-4/5 md:self-center text-slate-700">
          Não coloque dados reais!!
        </span>
        <table className="w-full text-left bg-opacity-40 text-sm md:w-4/5 md:self-center md:border text-gray-500">
          <HeaderTable
            handleClick={() => {
              setShowAdd(true)
              setModalAdd(modalAdd)
            }}
          />
          <tbody>
            {users.map((user) => {
              return (
                <LineTable
                  key={user.id}
                  id={user.id}
                  nome={user.nome}
                  email={user.email}
                  telefone={user.telefone}
                  naturalidade={user.naturalidade}
                  createdAt={user.createdAt}
                  refresh={init}
                />
              )
            })}
          </tbody>
        </table>
      </div>
      <ModalAdd
        refresh={init}
        show={showAdd}
        onClose={() => setShowAdd(false)}
      />
    </div>
  )
}

export default Home
