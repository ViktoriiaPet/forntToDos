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
    <>
    <div className="col-3 bg-dark border-5">
        <div className="d-flex flex-row justify-content-end">
          <button type="button" className="btn btn-secondary" onClick={handleFiltroClick}>Filtro</button>
          <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">+</button>
        </div>
          {props.tareas.map( (tarea,key) => (
            <CreateCard key = {key} idTarea={tarea.id} texto={tarea.texto} modificacion={tarea.modificacion} creacion={tarea.creacion} completada={tarea.completada} prioridad={tarea.prioridad} func={props.func} visibleFunc = {props.visibleFunc} onDelete = {props.onDelete}/>
          ))}
      </div>
      <ModalAltaTarea onAddTarea={props.onAddTarea} tareas={props.tareas} />
      {showFiltro && <Filtraccion />}
    </>
  );
}