import { db } from "./ListaDeTareas";
import { useState } from "react";

export function ModalAltaTarea() {
  const [texto, setTexto] = useState("");

  const handleSubmit = () => {
    let numeroMayor = 0;
    console.log(db.length);
    for (let i = 0; i < db.length; i++) {
      if (db[i].id > numeroMayor) {
        console.log(db[i].id, db[i].texto);
        numeroMayor = db[i].id;
      }
    }
    return numeroMayor;
  };

  const cambiaTexto = (e) => {
    setTexto(e.target.value);
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

            <div className="modal-body">
              <form>
                <div className="d-flex flex-column bg-info">
                  <label htmlFor="texto">Tarea: </label>
                  <textarea
                    id="texto"
                    type="text"
                    placeholder="Tarea"
                    onChange={cambiaTexto}
                  ></textarea>
                  <div className="d-flex flex-row mt-2">
                    <label htmlFor="prioridad" className="me-2">
                      Prioridad:
                    </label>
                    <select id="prioridad">
                      <option value="alta">Alta</option>
                      <option value="media">Media</option>
                      <option value="baja">Baja</option>
                    </select>
                  </div>

                  <div className="mt-2">
                    <label htmlFor="completada" className="me-2">
                      Completada:
                    </label>
                    <input id="completada" type="checkbox" />
                  </div>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">
                Cerrar
              </button>
              <button className="btn btn-primary" onClick={handleSubmit}>
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
