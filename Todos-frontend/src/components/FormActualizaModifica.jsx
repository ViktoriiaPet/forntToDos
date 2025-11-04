export function FormActualizaModifica (props) {
    
    const { texto, idTarea, completada, prioridad, creacion, modificacion } = props

    return (
        <div  className="d-flex flex-column col-3">
            <form>
                <div  className="d-flex flex-column bg-info">
                    <label for="texto">Tarea: </label>
                    <textarea id="texto" type="text" placeholder="Tarea"></textarea>
                    <div d-flex flex-row>
                        <label for="prioridad">Prioridad: </label>
                        <select id="prioridad" value={prioridad}>
                            <option value="alta">Alta</option>
                            <option value="media">Media</option>
                            <option value="baja">Baja</option>
                        </select>
                    </div>
                    <div className="justify-content-begin">
                        <label for="completada">Completada: </label>
                        <input id="completada" type="checkbox" value={completada}></input>
                    </div>
                    <text>Creacion: {creacion}</text>
                    <text>Modificacion: {modificacion}</text>
                    <div className="d-flex d-row justify-content-end">
                        <button type="button" id="btnGuardar" className="btn btn-primary">Guardar</button>
                        <button type="button" id="btnSalir" className="btn btn-primary">Salir</button>
                    </div>
                  </div>
 
                </form>
            </div>
    )
}