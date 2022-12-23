import React from 'react'
import { handleClick } from '../../../hooks/handleClick'

const HeaderTable = () => {
  return (
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
          <button
            onClick={() => handleClick(0, 'adicionar', 'TesteName')}
            className="text-green-600 dark:text-green-500 hover:underline"
          >
            Criar novo
          </button>
        </th>
      </tr>
    </thead>
  )
}

export default HeaderTable
