import React, { useEffect, useState } from 'react'
import api from '../../api'
import ModalAdd from '../../components/Modais/ModalAdd'
import ModalEdit from '../../components/Modais/ModalEdit'
import ModalRemove from '../../components/Modais/ModalRemove'
import ButtonTable from '../../components/Table/ButtonTable'
import HeaderTable from '../../components/Table/HeaderTable'

const Home = () => {
  const [users, setusers] = useState()
  const [showAdd, setShowAdd] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [showRemove, setShowRemove] = useState(false)
  const [modalAdd, setModalAdd] = useState()
  const [modalEdit, setModalEdit] = useState()
  const [modalRemove, setModalRemove] = useState()

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
      <h1 className="mb-7 text-center text-xl font-bold">Tabela de dragões</h1>
      <div className="flex flex-col justify-center">
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
                <tr
                  key={user.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th className="py-4 px-6">{user.nome}</th>
                  <td className="py-4 px-6">{user.naturalidade}</td>
                  <td className="py-4 px-6">{user?.createdAt}</td>
                  <td className="flex items-center py-4 px-6 space-x-3">
                    <ButtonTable
                      text="Editar User"
                      type="editar"
                      handleClick={() => {
                        setShowEdit(true)
                        setModalEdit(modalEdit)
                      }}
                    />
                    <ButtonTable
                      text="Remover User"
                      type="remover"
                      handleClick={() => {
                        setShowRemove(true)
                        setModalRemove(modalRemove)
                      }}
                    />
                  </td>
                  <ModalEdit
                    refresh={init}
                    show={showEdit}
                    onClose={() => setShowEdit(false)}
                    id={user.id}
                  />
                  <ModalRemove
                    refresh={init}
                    show={showRemove}
                    onClose={() => setShowRemove(false)}
                    id={user.id}
                  />
                </tr>
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
