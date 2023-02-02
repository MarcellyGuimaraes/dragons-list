import React, { useState } from 'react'
import api from '../../../api'

const ModalEdit = ({ show, onClose }) => {
  if (!show) {
    return null
  }

  // const [nome, setNome] = useState('')
  // const [naturalidade, setNaturalidade] = useState('')
  // const [email, setEmail] = useState('')
  // const [telefone, setTelefone] = useState('')

  const addItem = () => {
    api
      .post('/users', {
        nome: 'nome',
        naturalidade: 'naturalidade',
        email: 'email',
        telefone: 'telefone',
        createdAt: today,
      })
      .then(() => {
        window.location.reload()
      })
  }

  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={onClose}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Adicionar nova ferramenta
              </h3>
              <form className="space-y-6">Olá! Modal de EDITAR USUÁRIO</form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalEdit
