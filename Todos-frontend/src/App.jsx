import { useState } from 'react'
import './App.css'
import { CreateListaDeTareas } from './components/ListaDeTareas'
import { FormActualizaModifica } from './components/FormActualizaModifica'

function App() {
  const [tarea, setTarea] = useState({})
  const [isVisible, setVisible] = useState(true)
  return (
    <>
      <div className='d-flex flex-row'>
        <CreateListaDeTareas func={setTarea} visibleFunc = {setVisible}/>
        <FormActualizaModifica tarea={tarea} func = {setTarea} visibleFunc = {setVisible} visibleValue = {isVisible} />
      </div>
    </>
  )
}

export default App
