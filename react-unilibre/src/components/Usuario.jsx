export default function Usuario(props){
    return(
        <div>
            <h1>Soy Usuario {props.nombre}</h1>
            <h1>Edad: {props.edad}</h1>
            <h1>Calle: {props.direccion.calle}</h1>
            <h1>Ciudad: {props.direccion.ciudad}</h1>
        </div>
    )
}