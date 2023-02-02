import React from 'react'
import { handleClick } from '../../../hooks/handleClick'

const ButtonTable = ({ idUser, type, text }) => {
  return (
    <td className="flex items-center py-4 px-6 space-x-3">
      <button
        onClick={() => handleClick(idUser, type)}
        className={`font-medium ${
          type == 'editar' ? 'text-blue-600' : 'text-red-600'
        } dark:text-blue-500 hover:underline`}
      >
        {text}
      </button>
    </td>
  )
}

export default ButtonTable
