import { useState, useEffect } from "react"
import { db } from "./ListaDeTareas";
export function FormActualizaModifica({ tarea, func, visibleFunc, visibleValue, modoDeTarea} ) {
    const [texto, setTexto] = useState(tarea.texto || "")
    useEffect(() => {
    setTexto(tarea.texto || "")
    }, [tarea.texto])

    console.log(tarea.texto)


    
    const cambiaTexto = (e) => {
        console.log(e.target.value)
        setTexto(e.target.value)
    }

    const handleSalir = () => {
        visibleFunc(false);
        func({})
    }

    const handleSubmit = () => {
        if (modoDeTarea === "alta") {
            let numeroMayor = 0
            for (let i = 0; i < db.length; i++){
                if (bd[i].id > numeroMayor) {
                    numeroMayor = bd[i].id
                }
                console.log(numeroMayor)
            }
            const tareaNew = {
                id: numeroMayor++,
                texto: "estudiar",
              creacion: "1.11.2025",
              modificacion: "3.11.2025",
              completada: true,
              prioridad: "alta"
            }
        } else {
            let numeroMayor = 0
            console.log(db.length)
            for (let i = 0; i < db.length; i++){
                if (db[i].id > numeroMayor) {
                    console.log(db[i].id, db[i].texto)
                    numeroMayor = db[i].id
                }
            }
            return numeroMayor
        }
    }

    console.log("informacion de formulario", tarea)
    return (
        visibleValue && (
        <div className="d-flex flex-column col-3">
            <form>
                <div  className="d-flex flex-column bg-info">
                    <label for="texto">Tarea: </label>
                    <textarea id="texto" type="text" placeholder="Tarea" value={texto} onChange={cambiaTexto}></textarea>
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
                        <button type="button" id="btnGuardar" className="btn btn-primary" onClick={handleSubmit}>Guardar</button>
                        <button type="button" id="btnSalir" className="btn btn-primary" onClick={handleSalir}>Salir</button>
                    </div>
                  </div>
 
                </form>
            </div>) 
    )
}