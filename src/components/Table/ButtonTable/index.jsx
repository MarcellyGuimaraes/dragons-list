import React from 'react'
import { DeleteIcon, EditIcon } from '../../Icons'

const ButtonTable = ({ handleClick, type }) => {
  return (
    <button
      className="font-medium dark:text-blue-500 hover:underline"
      onClick={handleClick}
    >
      {type == 'editar' ? <EditIcon /> : <DeleteIcon />}
    </button>
  )
}

export default ButtonTable
