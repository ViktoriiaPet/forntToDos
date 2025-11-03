
export function CreateCard({ nombre }) {
    
    const { texto, id, completada, prioridad, creacion, modificacion } = nombre
    return (
       <div>
            <div>
                <span>{texto}</span>
            </div>
            <div>
                <p>{id}</p>
                <p>{creacion}</p>
                <p>{modificacion}</p>
                <input type="checkbox" name="" id="completada" />
            </div>
        </div>
    )
}