import React from 'react'

const Button = ({ Text, onClick, Type = 'button' }) => {
  return (
    <button
      type={Type}
      className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
      onClick={onClick}
    >
      {Text}
    </button>
  )
}

export default Button
