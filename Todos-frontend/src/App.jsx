import { useState } from 'react'
import './App.css'
import { CreateListaDeTareas } from './components/ListaDeTareas'
import { FormActualizaModifica } from './components/FormActualizaModifica'

function App() {
  const [tareas, setTareas] = useState([
    {
      texto: "estudiar",
      id: 1,
      creacion: "1.11.2025",
      modificacion: "3.11.2025",
      completada: true,
      prioridad: "alta",
    },
    {
      texto: "limpar",
      id: 2,
      creacion: "1.11.2025",
      modificacion: "3.11.2025",
      completada: true,
      prioridad: "media",
    },
    {
      texto: "leer",
      id: 3,
      creacion: "1.11.2025",
      modificacion: "3.11.2025",
      completada: false,
      prioridad: "baja",
    },
  ]);
  const [tarea, setTarea] = useState({})
  const [isVisible, setVisible] = useState(false)

  const addTarea = (nuevaTarea) => {
    setTareas((prev) => [...prev, nuevaTarea]);
  };

  return (
    <>
      <div className='d-flex flex-row'>
        <CreateListaDeTareas func={setTarea} visibleFunc = {setVisible} onAddTarea={addTarea} tareas ={tareas} />
        <FormActualizaModifica tarea={tarea} func = {setTarea} visibleFunc = {setVisible} visibleValue = {isVisible} />
      </div>
    </>
  )
}

export default App
