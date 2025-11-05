import { useState } from "react";


export function ModalAltaTarea({ tareas, onAddTarea }) {
  const [texto, setTexto] = useState("");
  const [prioridad, setPrioridad] = useState("media");
  const [completada, setCompletada] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    let numeroMayor = 0;
     for (let i = 0; i < tareas.length; i++) {
         if (tareas[i].id > numeroMayor) {
              numeroMayor = tareas[i].id;
             }
             }


    

    const nuevaTarea = {
      id: numeroMayor + 1,
      texto,
      prioridad,
      completada,
      creacion: new Date().toLocaleString(),
      modificacion: new Date().toLocaleString(),
    };

    onAddTarea(nuevaTarea);

    setTexto("");
    setPrioridad("media");
    setCompletada(false);
     document.activeElement?.blur();
    document.querySelector('[data-bs-dismiss="modal"]')?.click();


  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Tarea Nueva
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body" >
              <form style = {{backgroundColor : 'silver'}}>
                <div className="d-flex flex-column p-2 rounded">
                  <label htmlFor="texto">Tarea:</label>
                  <textarea
                    id="texto"
                    placeholder="Describe tu tarea..."
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                  ></textarea>

                  <div className="d-flex flex-row mt-2 align-items-center">
                    <label htmlFor="prioridad" className="me-2">
                      Prioridad:
                    </label>
                    <select
                      id="prioridad"
                      value={prioridad}
                      onChange={(e) => setPrioridad(e.target.value)}
                    >
                      <option value="alta">Alta</option>
                      <option value="media">Media</option>
                      <option value="baja">Baja</option>
                    </select>
                  </div>

                  <div className="mt-2">
                    <label htmlFor="completada" className="me-2">
                      Completada:
                    </label>
                    <input
                      id="completada"
                      type="checkbox"
                      checked={completada}
                      onChange={(e) => setCompletada(e.target.checked)}
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button className="btn btn-light" data-bs-dismiss="modal">
                Cerrar
              </button>
              <button className="btn btn-light" onClick={handleSubmit}>
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
