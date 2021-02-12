import React from 'react';

function myFullName(name, lastName) {
  return `${name} ${lastName}`
}

const element = <h1 classNome="teste">IIIIIIIT'S TIME!!!, {myFullName('Renato', 'Benage')}</h1>

function App() {
  return (
    <div>
      {element}
      {element}
      {element}
      {element}
      {element}
      {element}
      <h1 className="hello-world">Olá Mundo!</h1>
      {/* <p>Este é meu primeiro App React</p> */}
    </div>
  )
}

export default App;
