import { useState, useEffect } from "react";

export function FormActualizaModifica({ tarea, func, visibleFunc, visibleValue,  onEditTarea}) {
  const [texto, setTexto] = useState(tarea.texto || "");
  const [prioridad, setPrioridad] = useState(tarea.prioridad || "");
  const [completada, setCompletada] = useState(tarea.completada || false);

  useEffect(() => {
    setTexto(tarea.texto || "");
  }, [tarea.texto]);

  useEffect(() => {
    setPrioridad(tarea.prioridad || "");
  }, [tarea.prioridad]);

    useEffect(() => {
    setCompletada(tarea.completada || "");
  }, [tarea.completada]);

  const cambiaTexto = (e) => {
    setTexto(e.target.value);
    func({ ...tarea, texto: e.target.value });
  };
  const cambiaPrioridad = (e) => {
    setPrioridad(e.target.value)
  }

  const cambiaCompletada = (e) => {
    setCompletada(e.target.checked)
  }

  const handleSalir = () => {
    visibleFunc(false);
    func({});
  };

  const handleGuardar = (e) => {
    e.preventDefault();
      const editadaTarea = {
      id: tarea.idTarea,
      texto,
      prioridad,
      completada,
      creacion: tarea.creacion,
      modificacion: new Date().toLocaleString(),
    };

    onEditTarea(editadaTarea);
    handleSalir();

    console.log(editadaTarea)
  }

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
                value={prioridad}
                onChange={cambiaPrioridad}
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
                onChange={cambiaCompletada}
              />
            </div>

            <p>Creación: {tarea.creacion}</p>
            <p>Modificación: {tarea.modificacion}</p>

            <div className="d-flex justify-content-end gap-2 mt-3">
              <button type="button" className="btn btn-primary" onClick={handleGuardar}>
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
