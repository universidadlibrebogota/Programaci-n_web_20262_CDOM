import { Link } from "react-router-dom";

export function Home(){
    return(
        <div>
            <h1>Estoy en el inicio</h1>
            <Link to={'/pagina2'}>Ir a pagina2</Link>
        </div>
    )
}