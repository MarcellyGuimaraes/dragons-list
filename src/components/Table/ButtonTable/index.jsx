import React from 'react'

const ButtonTable = ({ handleClick, type, text }) => {
  return (
    <td className="flex items-center py-4 px-6 space-x-3">
      <button
        className={`font-medium ${
          type == 'editar' ? 'text-blue-600' : 'text-red-600'
        } dark:text-blue-500 hover:underline`}
        onClick={handleClick}
      >
        {text}
      </button>
    </td>
  )
}

export default ButtonTable
