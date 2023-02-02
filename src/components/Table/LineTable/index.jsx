import React, { useState } from 'react'
import ModalEdit from '../../Modais/ModalEdit'
import ModalRemove from '../../Modais/ModalRemove'
import ButtonTable from '../ButtonTable'

const LineTable = ({
  nome,
  email,
  telefone,
  naturalidade,
  createdAt,
  id,
  refresh,
}) => {
  const [showEdit, setShowEdit] = useState(false)
  const [showRemove, setShowRemove] = useState(false)
  const [modalEdit, setModalEdit] = useState()
  const [modalRemove, setModalRemove] = useState()

  return (
    <tr className="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th className="py-4 px-6">{nome}</th>
      <td className="py-4 px-6">{email}</td>
      <td className="py-4 px-6">{telefone}</td>
      <td className="py-4 px-6">{naturalidade}</td>
      <td className="py-4 px-6">{createdAt}</td>
      <td>
        <div className="flex justify-center py-4 px-6 space-x-3">
          <ButtonTable
            type="editar"
            handleClick={() => {
              setShowEdit(true)
              setModalEdit(modalEdit)
            }}
          />
          <ButtonTable
            type="remover"
            handleClick={() => {
              setShowRemove(true)
              setModalRemove(modalRemove)
            }}
          />
        </div>
      </td>
      <ModalEdit
        refresh={refresh}
        show={showEdit}
        onClose={() => setShowEdit(false)}
        id={id}
        inicialEmail={email}
        inicialNome={nome}
        inicialTelefone={telefone}
      />
      <ModalRemove
        refresh={refresh}
        show={showRemove}
        onClose={() => setShowRemove(false)}
        id={id}
      />
    </tr>
  )
}

export default LineTable
