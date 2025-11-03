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
    <>
          {db.map((tarea) => (
        <CreateCard key={tarea.id} nombre={tarea.texto} />
      ))}
    </>
  );
}