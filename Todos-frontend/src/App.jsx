import { useState } from 'react'
import './App.css'
import { CreateListaDeTareas } from './components/ListaDeTareas'
import { FormActualizaModifica } from './components/FormActualizaModifica'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='d-flex flex-row'>
        <CreateListaDeTareas/>
        <FormActualizaModifica texto="Pepe"/>
      </div>
    </>
  )
}

export default App
