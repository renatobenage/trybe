
function colocaUsuarioNaTele(usuario) {
  // console.log(usuario)
  const sectionUsers = document.querySelector('.users')

  const card = document.createElement('div')
  card.className = 'card'

  const nameText = document.createElement('div')
  const img = document.createElement('img')

  const btn = document.createElement('button')
  btn.className = 'btn-user'

  nameText.innerText = usuario.login
  img.src = usuario.avatar_url

  card.appendChild(nameText)
  card.appendChild(img)
  card.appendChild(btn)
  sectionUsers.appendChild(card)
}

function pegarUsuariosGithub() {
  return new Promise((resolve, reject) => {

    fetch('https://api.github.com/users')
      .then((response) => response.json())
      .then((usuarios) => resolve(usuarios))
      .catch((error) => reject(error))

  })
}

window.onload = async () => {
  //! Ao chamar coloca usuarios na tela
  // pegarUsuariosGithub()
  //   .then((usuarios) => {
  //     usuarios.forEach((user) => colocaUsuarioNaTele(user))
  //   })
  //   .catch(error => console.log(error))

  //! Outra funcao ao chamar pegarUsuariosGithub
  // pegarUsuariosGithub()
  //   .then((usuarios) => console.log(usuarios))

  //! Resolvendo com async await
  try {
    const usuarios = await pegarUsuariosGithub()
    usuarios.forEach(user => colocaUsuarioNaTele(user))

    // querySelectorAll(class).forEach(user => addEventListener('click', () => fetchUser))
  } catch (error) {
    console.log(error)
  }


}











// fetch()
// hjasu8ha
// resolve(response)