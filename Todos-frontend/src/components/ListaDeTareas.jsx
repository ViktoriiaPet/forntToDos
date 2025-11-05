import { CreateCard } from "./TareaCard";
import { ModalAltaTarea } from "./modalAñadirTarea";
import { Filtraccion } from "./Filtracion";
import { use, useState } from "react";


export function CreateListaDeTareas(props) {
  const [showFiltro, setShowFlitro] = useState (false)

  const handleFiltroClick = () => {
    setShowFlitro((prev) => !prev);
  }

  return (
    <div>
    <div className="bg-dark border-5 p-4">
        <div className="d-flex flex-row justify-content-end gap-2 p-2">
          <div className="d-flex flex-column ">
          <button type="button" className="btn btn-secondary " onClick={handleFiltroClick}>Filtro</button>
            {showFiltro && <Filtraccion setFiltroCompletada={props.setFiltroCompletada} setFiltroPrioridad={props.setFiltroPrioridad} />}
          </div>
          <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">+</button>
        </div>
          {props.tareas.map( (tarea,key) => (
            <CreateCard key = {key} idTarea={tarea.id} texto={tarea.texto} modificacion={tarea.modificacion} creacion={tarea.creacion} completada={tarea.completada} prioridad={tarea.prioridad} func={props.func} visibleFunc = {props.visibleFunc} onDelete = {props.onDelete}/>
          ))}
      </div>
      <ModalAltaTarea onAddTarea={props.onAddTarea} tareas={props.tareas} />
      
    </div>
  );
}