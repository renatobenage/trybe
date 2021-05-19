const appendJoke = (joke) => {
  const li = document.createElement('li')
  const ul = document.querySelector('ul')

  li.innerText = joke;
  ul.appendChild(li)
}


// Obter uma piada da API icanhazdadjoke.com e adicionar 
// ao HTML utilizando a função appendJoke

function fetchJoke() {
  const param = { headers: { Accept: 'application/json' }}

  const promise = fetch('https://icanhazdadjoke.com/search?term=spider', param)
  
  promise
    .then( // quando a requisição deu sucesso
      (response) => {
        const responsePromise = response.json();
        responsePromise.then((json) => {
          console.log(json.results[0].joke);
          appendJoke(json.results[0].joke);
        })
      })

}

window.onload = () => fetchJoke()