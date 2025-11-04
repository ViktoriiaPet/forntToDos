import { useState } from "react"

export function FormActualizaModifica({ tarea, func, visibleFunc, visibleValue} ) {

    const handleSalir = () => {
        visibleFunc(false);
        func({})
    }

    const { texto, idTarea, completada, prioridad, creacion, modificacion } = tarea
    console.log("informacion de formulario", tarea.texto)
    return (
        visibleValue && (
        <div className="d-flex flex-column col-3">
            <form>
                <div  className="d-flex flex-column bg-info">
                    <label for="texto">Tarea: </label>
                    <textarea id="texto" type="text" placeholder="Tarea" value={tarea.texto}></textarea>
                    <div d-flex flex-row>
                        <label for="prioridad">Prioridad: </label>
                        <select id="prioridad" value={tarea.prioridad}>
                            <option value="alta">Alta</option>
                            <option value="media">Media</option>
                            <option value="baja">Baja</option>
                        </select>
                    </div>
                    <div className="justify-content-begin">
                        <label for="completada">Completada: </label>
                        <input id="completada" type="checkbox" checked={tarea.completada}></input>
                    </div>
                    <text>Creacion: {tarea.creacion}</text>
                    <text>Modificacion: {tarea.modificacion}</text>
                    <div className="d-flex d-row justify-content-end">
                        <button type="button" id="btnGuardar" className="btn btn-primary">Guardar</button>
                        <button type="button" id="btnSalir" className="btn btn-primary" onClick={handleSalir}>Salir</button>
                    </div>
                  </div>
 
                </form>
            </div>) 
    )
}