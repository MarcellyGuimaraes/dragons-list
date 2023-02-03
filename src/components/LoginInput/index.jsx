import React from 'react'

const InputLogin = ({ type, placeholder, value, onChange, name }) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {name}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  )
}

export default InputLogin
