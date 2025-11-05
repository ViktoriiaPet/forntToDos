export function Filtraccion(props) {

    const filtroElegido = (e) => {
        props.setFiltroPrioridad("")
        props.setFiltroCompletada("")
        switch (e.target.value) {
            case "prioridad-alta":
                 props.setFiltroPrioridad("alta")
                break;
            case "prioridad-media":

                props.setFiltroPrioridad("media")
                break;
            case "prioridad-baja":

                props.setFiltroPrioridad("baja")
                break;
        case "nocompletada":
                props.setFiltroCompletada("false")
                break;
        case "completada":
                props.setFiltroCompletada("true")
                break;
        }
    }


    return (
        <div>
        <select
                id="Filtrar"
                onChange={filtroElegido}
            >
        <option value="filtrar">Seleccionar</option>        
        <option value="prioridad-alta">Prioridad alta </option>
        <option value="prioridad-media">Prioridad media</option>
        <option value="prioridad-baja">Prioridad baja</option>
        <option value="nocompletada"> No completadas</option>
        <option value="completada"> Completadas</option>
      </select>
        </div>
    )
}