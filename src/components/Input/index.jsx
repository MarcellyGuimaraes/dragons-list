import React from 'react'

const Input = ({ label, value, setFunc }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
        value={value}
        onChange={(e) => setFunc(e.target.value)}
      />
    </div>
  )
}

export default Input
