import React from 'react'
import { AddIcon } from '../../Icons'

const HeaderTable = ({ handleClick }) => {
  return (
    <thead className="text-center text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="py-3 px-6">
          Nome
        </th>
        <th scope="col" className="py-3 px-6">
          Email
        </th>
        <th scope="col" className="py-3 px-6">
          Telefone
        </th>
        <th scope="col" className="py-3 px-6">
          Nacionalidade
        </th>
        <th scope="col" className="py-3 px-6">
          Data de Criação
        </th>
        <th scope="col" className="py-3 px-6">
          <button onClick={handleClick}>
            <AddIcon />
          </button>
        </th>
      </tr>
    </thead>
  )
}

export default HeaderTable
