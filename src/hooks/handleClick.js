import api from '../api'

const date = new Date()
const dia = date.getDate()
const mes = date.getMonth()
const ano = date.getFullYear()
const today = `${dia}/${mes}/${ano}`

export function handleClick(id, action, name = '') {
  const lista = [
    'Água',
    'Chamas',
    'Amor',
    'Luz',
    'Vento',
    'Rocha',
    'Som',
    'Névoa',
    'Trevas',
    'Terra',
    'Lua',
  ]
  const elemento = lista[Math.floor(Math.random() * lista.length)]

  switch (action) {
    case 'adicionar':
      {
        var item = prompt('Digite o nome: ')
        if (item == null || item == '') {
          return
        } else {
          api
            .post('', {
              name: item,
              type: elemento,
              createdAt: today,
            })
            .then(() => {
              window.location.reload()
            })
        }
      }
      break

    case 'editar':
      {
        var item = prompt('Digite o novo nome: ')
        if (item == null || item == '') {
          return
        } else {
          api
            .put(`/${id}`, {
              name: item,
            })
            .then(() => {
              window.location.reload()
            })
        }
      }
      break

    case 'remover': {
      var r = confirm('Você tem certeza que quer deletar?')
      if (r == true) {
        api.delete(`/${id}`).then(() => {
          window.location.reload()
        })
      } else {
        return
      }
    }
    default: {
      throw new Error(`Unhandled action: ${action}`)
    }
  }
}
