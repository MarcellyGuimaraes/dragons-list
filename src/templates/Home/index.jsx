import React, { useEffect, useState } from 'react'
import api from '../../api'
import ButtonTable from '../../components/Table/ButtonTable'
import HeaderTable from '../../components/Table/HeaderTable'

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
    <div
      className={`pt-9 bg-slate-400 ${
        dragons.length <= 18 ? 'h-screen' : 'h-full'
      }`}
    >
      <h1 className="mb-7 text-center text-xl font-bold">Tabela de dragões</h1>
      <div className="flex flex-col justify-center">
        <table className="w-full text-left bg-opacity-40 text-sm md:w-4/5 md:self-center md:border text-gray-500">
          <HeaderTable />
          <tbody>
            {dragons.map((dragon) => {
              return (
                <tr
                  key={dragon.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th className="py-4 px-6">{dragon.name}</th>
                  <td className="py-4 px-6">{dragon.type}</td>
                  <td className="py-4 px-6">{dragon?.createdAt}</td>
                  <ButtonTable idDragon={dragon.id} />
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home
