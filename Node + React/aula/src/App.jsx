import React from 'react';
import MeuComponente from './Components/meucomponente';


 function App(props) {
  return (
    <div className='App'>
      <MeuComponente texto={'Testando props -> Propriedades'}/>
    </div>
  )
}

export default App;