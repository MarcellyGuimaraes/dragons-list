import React from 'react'
import { handleClick } from '../../../hooks/handleClick'

const ButtonTable = ({ idDragon }) => {
  return (
    <td className="flex items-center py-4 px-6 space-x-3">
      <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></span>
      <button
        onClick={() => handleClick(idDragon, 'remover')}
        className="font-medium text-red-600 dark:text-red-500 hover:underline"
      >
        Remover
      </button>
    </td>
  )
}

export default ButtonTable
