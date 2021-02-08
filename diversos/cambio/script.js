const setupEvents = () => {
  // setar os eventos
  // Ter em mãos meus elementos
  const searchButton = document.querySelector('#search-button');
  searchButton.addEventListener('click', () => {
    console.log('Button clicado')
    // pesquisar na api usando o texto no input
  });
}

window.onload = () => {
  setupEvents();
}
