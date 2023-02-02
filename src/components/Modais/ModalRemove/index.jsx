import React from 'react'
import api from '../../../api'

const ModalRemove = ({ show, onClose, id, refresh }) => {
  if (!show) {
    return null
  }

  const removeItem = () => {
    api.delete(`/users/${id}`).then(() => {
      refresh()
      onClose()
    })
  }

  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-5"
          onClick={onClose}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Você tem certeza que quer deletar?
              </h3>
              <form className="space-y-6">
                <button
                  data-modal-toggle="popup-modal"
                  type="button"
                  onClick={removeItem}
                  className="w-full text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sim, delete.
                </button>
                <button
                  data-modal-toggle="popup-modal"
                  type="button"
                  onClick={onClose}
                  className="w-full text-red-700 border bg-transparent border-red-700 hover:bg-red-800 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Não, voltar.
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalRemove
