
export function CreateCard(props) {
    const { texto, idTarea, completada, prioridad, creacion, modificacion } = props
    let color_card = ""

    const handleClickBlock = () => {
        props.func({ texto, idTarea, completada, prioridad, creacion, modificacion })
        props.visibleFunc(true)
    }

    const handleBorrar = () => {
        props.onDelete(idTarea)
    }


    switch (prioridad)
    {
        case 'alta':
            color_card = "bg-danger text-light";
            break;
        case 'media':
            color_card = "bg-warning";
            break;
        case 'baja':
            color_card = "bg-success text-light";
            break;
    }

    return (
        <div>
            <div className={"m-2 p-1 col-12 border border-light rounded " + color_card}>
                <div className="d-flex flex-row justify-content-between">
                    <p>ID: {idTarea} </p>
                    <div>
                    <input id="chkCompletada" type="checkbox" checked={completada} readOnly={true}/>
                    <label htmlFor="chkCompletada">Completada</label>
                    </div>
                </div>
                <div className="d-flex justify-content-center" onClick={handleClickBlock}>
                    <p className="col-9 border bg-light text-dark" data-idtarea={idTarea}>{texto}</p>
                </div>
                <div className ="d-flex flex-row justify-content-between">
                    <div>Creación: {creacion} </div>
                    <div> Modificación: {modificacion} </div>
                </div>

                <div className="d-flex gap-2 d-row justify-content-end">
                    <button type="button" id="btnBorrar" className="btn btn-primary" onClick={handleBorrar}>Borrar</button>
                    <button type="button" id="btnModificar" className="btn btn-primary" onClick={handleClickBlock}>Modificar</button>
                </div>
            </div>
        </div>
    )
}