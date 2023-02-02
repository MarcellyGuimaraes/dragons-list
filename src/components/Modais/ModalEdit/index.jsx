import React, { useState } from 'react'
import api from '../../../api'
import Input from '../../Input'

const ModalEdit = ({ show, onClose, id }) => {
  if (!show) {
    return null
  }

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const editItem = () => {
    api
      .put(`/users/${id}`, {
        nome: nome,
        email: email,
        telefone: telefone,
      })
      .then(() => {
        window.location.reload()
      })
  }

  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-10"
          onClick={onClose}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Editar usuário
              </h3>
              <form className="space-y-6">
                <Input label="Nome" value={nome} setFunc={setNome} />
                <Input label="Email" value={email} setFunc={setEmail} />
                <Input
                  label="Telefone"
                  value={telefone}
                  setFunc={setTelefone}
                />
                <button
                  data-modal-toggle="popup-modal"
                  type="button"
                  onClick={editItem}
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Salvar mudanças
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalEdit
