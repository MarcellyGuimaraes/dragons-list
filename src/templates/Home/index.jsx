import React, { useEffect, useState } from 'react'
import api from '../../api'

const Home = () => {
  const [dragons, setDragons] = useState()

  useEffect(() => {
    api
      .get('')
      .then((response) => setDragons(response.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err)
      })
  }, [])

  if (!dragons) return null

  return (
    <div className="flex flex-col justify-center m-2">
      <h1 className="text-center m-4">Tabela de Dragões</h1>
      <div className="overflow-x-auto mx-32 mb-6 relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Nome do Dragão
              </th>
              <th scope="col" className="py-3 px-6">
                Tipo
              </th>
              <th scope="col" className="py-3 px-6">
                Data de Criação
              </th>
              <th scope="col" className="py-3 px-6">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {dragons.map((dragon) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {dragon.name}
                </th>
                <td className="py-4 px-6">{dragon.type}</td>
                <td className="py-4 px-6">{dragon?.createdAt}</td>
                <td className="flex items-center py-4 px-6 space-x-3">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Remove
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home
