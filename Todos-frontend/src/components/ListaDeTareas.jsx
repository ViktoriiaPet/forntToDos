import { CreateCard } from "./TareaCard";

const db = [{
              texto: "estudiar",
              id: 1,
              creacion: "1.11.2025",
              modificacion: "3.11.2025",
              completada: true,
              prioridad: "alta"
            },
            {
              texto: "estudiar",
              id: 2,
              creacion: "1.11.2025",
              modificacion: "3.11.2025",
              completada: true,
              prioridad: "media"
            },
            {
              texto: "estudiar",
              id: 3,
              creacion: "1.11.2025",
              modificacion: "3.11.2025",
              completada: false,
              prioridad: "baja"
            }
]

export function CreateListaDeTareas() {
  /* Aquí luego añadimos el fetch */
  {db.map((tarea) => (
        console.log(tarea)
      ))}


  return (
    <div className="col-3 bg-dark border-5">
        <div className="d-flex flex-row justify-content-end">
          <button type="button" className="btn btn-secondary">Filtro</button>
          <button type="button" className="btn btn-secondary">+</button>
        </div>
          {db.map( tarea => (
            <CreateCard idTarea={tarea.id} texto={tarea.texto} modificacion={tarea.modificacion} creacion = {tarea.creacion} completada={tarea.completada} prioridad={tarea.prioridad} />
          ))}
    </div>
  );
}