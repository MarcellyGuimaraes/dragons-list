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
        api
          .post('', {
            title: name,
            type: elemento,
            createdAt: today,
          })
          .then(() => {
            window.location.reload(true)
          })
        console.log('Adicionar clicado')
      }
      break
    case 'remover': {
      var r = confirm('Você tem certeza que quer deletar?')
      if (r == true) {
        api.delete(`/${id}`).then(() => {
          window.location.reload(true)
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
