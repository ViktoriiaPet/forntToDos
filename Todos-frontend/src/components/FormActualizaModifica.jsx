import { useState, useEffect } from "react";

export function FormActualizaModifica({ tarea, func, visibleFunc, visibleValue, modoDeTarea }) {
  const [texto, setTexto] = useState(tarea.texto || "");

  useEffect(() => {
    setTexto(tarea.texto || "");
  }, [tarea.texto]);

  const cambiaTexto = (e) => {
    setTexto(e.target.value);
    func({ ...tarea, texto: e.target.value });
  };

  const handleSalir = () => {
    visibleFunc(false);
    func({});
  };

  return (
    visibleValue && (
      <div className="d-flex flex-column col-3">
        <form>
          <div className="d-flex flex-column bg-info p-2 rounded">
            <label htmlFor="texto">Tarea: </label>
            <textarea
              id="texto"
              placeholder="Tarea"
              value={texto}
              onChange={cambiaTexto}
            />

            <div className="d-flex flex-row align-items-center mt-2">
              <label htmlFor="prioridad" className="me-2">
                Prioridad:
              </label>
              <select
                id="prioridad"
                value={tarea.prioridad || "media"}
                onChange={(e) => func({ ...tarea, prioridad: e.target.value })}
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
                checked={!!tarea.completada}
                onChange={(e) => func({ ...tarea, completada: e.target.checked })}
              />
            </div>

            <p>Creación: {tarea.creacion}</p>
            <p>Modificación: {tarea.modificacion}</p>

            <div className="d-flex justify-content-end gap-2 mt-3">
              <button type="button" className="btn btn-primary">
                Guardar
              </button>
              <button type="button" className="btn btn-secondary" onClick={handleSalir}>
                Salir
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  );
}
