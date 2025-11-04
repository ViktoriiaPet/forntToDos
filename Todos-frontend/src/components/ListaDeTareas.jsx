import { CreateCard } from "./TareaCard";

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
  console.log("CreateListaDeTareas", props)
  //{db.map((tarea) => (
        //console.log(tarea)
     // ))}


  return (
    <div className="col-3 bg-dark border-5">
        <div className="d-flex flex-row justify-content-end">
          <button type="button" className="btn btn-secondary">Filtro</button>
          <button type="button" className="btn btn-secondary">+</button>
        </div>
          {db.map( (tarea,key) => (
            <CreateCard key = {key} idTarea={tarea.id} texto={tarea.texto} modificacion={tarea.modificacion} creacion={tarea.creacion} completada={tarea.completada} prioridad={tarea.prioridad} func={props.func} visibleFunc = {props.visibleFunc}/>
          ))}
    </div>
  );
}