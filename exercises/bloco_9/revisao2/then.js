const BASE_URL = 'https://api.exchangerate.host/latest'



function fetchCurrency() {
  fetch(`${BASE_URL}$base=${currency}`)
    .then((response) => response.json())
    .then(({ base, rates }) => {

      //renderizar a lista
      const baseElement = document.querySelector('#base-currency') 
      baseElement.innerText = base

      const currencyList = document.querySelector('#currency-list')
      const ratesEntries = Object.entries(rates)

      ratesEntries.forEach(([ currency, rate ]) => {
        const li = document.createElement('li')
        li.innerText = `${currency}: ${rate}`  

        currencyList.appendChild(li)
    })
  }) 
}

function setupEvents(){
  const button = document.querySelector('#search-button')
  button.addEventListener('click', () => {
    const { value } = document.querySelector('#currency-input')
    fetchCurrency(value)
  })
}

window.onload = () => {
  setupEvents();
  fetchCurrency('BRL')
}
