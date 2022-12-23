import React from 'react'

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  )
}

export default Input
