import React, { useEffect, useState } from 'react'
import api from '../../api'
import ModalAdd from '../../components/ModalAdd'
import ButtonTable from '../../components/Table/ButtonTable'
import HeaderTable from '../../components/Table/HeaderTable'

const Home = () => {
  const [users, setusers] = useState()
  const [show, setShow] = useState(false)
  const [modal, setModal] = useState()

  useEffect(() => {
    api
      .get('/users')
      .then((response) => setusers(response.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err)
      })
  }, [])

  if (!users) return null

  return (
    <div
      className={`pt-9 bg-slate-400 ${
        users.length <= 18 ? 'h-screen' : 'h-full'
      }`}
    >
      <h1 className="mb-7 text-center text-xl font-bold">Tabela de dragões</h1>
      <div className="flex flex-col justify-center">
        <table className="w-full text-left bg-opacity-40 text-sm md:w-4/5 md:self-center md:border text-gray-500">
          <HeaderTable
            handleClick={() => {
              setShow(true)
              setModal(modal)
            }}
          />
          <tbody>
            {users.map((user) => {
              return (
                <tr
                  key={user.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th className="py-4 px-6">{user.nome}</th>
                  <td className="py-4 px-6">{user.naturalidade}</td>
                  <td className="py-4 px-6">{user?.createdAt}</td>
                  <td className="flex items-center py-4 px-6 space-x-3">
                    <button
                      className={`px-6 py-2
       border-2 border-green-600 text-green-600 
       font-medium text-xs uppercase
       rounded transition w-full mb-6
       duration-150 ease-in-out md:w-2/6 md:h-12 hover:bg-green-600 hover:text-green-100`}
                      onClick={() => {
                        setShow(true)
                        setModal(modal)
                      }}
                    >
                      Editar User
                    </button>
                    <ButtonTable
                      idUser={user.id}
                      text="Remover User"
                      type="remover"
                    />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <ModalAdd show={show} onClose={() => setShow(false)} />
    </div>
  )
}

export default Home
