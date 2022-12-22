import React from 'react'

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  )
}

export default Input
