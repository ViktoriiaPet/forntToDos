import { useState } from "react";
import { CreateCard } from "./TareaCard";
import { ModalAltaTarea } from "./modalAñadirTarea";
export const db = [{
              texto: "estudiar",
              id: 1,
              creacion: "1.11.2025",
              modificacion: "3.11.2025",
              completada: true,
              prioridad: "alta"
            },
            {
              texto: "limpar",
              id: 2,
              creacion: "1.11.2025",
              modificacion: "3.11.2025",
              completada: true,
              prioridad: "media"
            },
            {
              texto: "leer",
              id: 3,
              creacion: "1.11.2025",
              modificacion: "3.11.2025",
              completada: false,
              prioridad: "baja"
            }
]

export function CreateListaDeTareas(props) {
  /* Aquí luego añadimos el fetch */
  const [newModal, setNewModal] = useState(false)
  const HandleCreateNewTarea = (e) => {
    setNewModal(true)
  }
  return (
    <>
    <div className="col-3 bg-dark border-5">
        <div className="d-flex flex-row justify-content-end">
          <button type="button" className="btn btn-secondary">Filtro</button>
          <button type="button" className="btn btn-secondary" onClick={HandleCreateNewTarea} data-bs-toggle="modal" data-bs-target="#exampleModal">+</button>
        </div>
          {db.map( (tarea,key) => (
            <CreateCard key = {key} idTarea={tarea.id} texto={tarea.texto} modificacion={tarea.modificacion} creacion={tarea.creacion} completada={tarea.completada} prioridad={tarea.prioridad} func={props.func} visibleFunc = {props.visibleFunc}/>
          ))}
      </div>
      {newModal && <ModalAltaTarea />}     
    </>
  );
}