import React from 'react'

const HeaderTable = ({ handleClick }) => {
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
            className="text-green-600 dark:text-green-500 hover:underline"
            onClick={handleClick}
          >
            Criar Novo
          </button>
        </th>
      </tr>
    </thead>
  )
}

export default HeaderTable
