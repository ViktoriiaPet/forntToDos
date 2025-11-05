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
  const [filtroCompletada, setFiltroCompletada] = useState("")
  const [filtroPrioridad, setFiltroPrioridad] = useState("")


  const addTarea = (nuevaTarea) => {
    setTareas((prev) => [nuevaTarea, ...prev]);
  };

  const editTarea = (editadaTarea) => {
    setTareas((prev) =>
  prev.map((t) => (t.id === editadaTarea.id ? editadaTarea : t))
);
  }


  const handleDeleteTarea = (id) => {
    const nuevasTareas = [];
  for (const tarea of tareas) {
    if (tarea.id !== id) {
      nuevasTareas.push(tarea);
    }
  }
  setTareas(nuevasTareas);
  }

  const tareasFiltradas = tareas.filter(t => {
  if (filtroCompletada !== "") {
    return filtroCompletada === "true" ? t.completada : !t.completada;
  }

  if (filtroPrioridad !== "") {
    return t.prioridad === filtroPrioridad;
  }
  return true;
});

  return (
    <>
      <div className='d-flex flex-row'>
        <div className='col-4'></div>
          <CreateListaDeTareas func={setTarea} visibleFunc={setVisible} onAddTarea={addTarea} tareas=
            {tareasFiltradas} onDelete={handleDeleteTarea} setFiltroCompletada={setFiltroCompletada} setFiltroPrioridad={setFiltroPrioridad} />
          <FormActualizaModifica tarea={tarea} func={setTarea} visibleFunc={setVisible} visibleValue={isVisible} onEditTarea={editTarea} />
      </div>
    </>
  )
}

export default App
