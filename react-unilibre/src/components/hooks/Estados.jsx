import {useState} from 'react';
import './Estados.css'
export function Estados(){
    //Creamos el hook
    const [likes,setLikes]=useState(0);
    //funciones para cambiar el esta de los likes o hooks
    const darLike=()=>{setLikes(likes+1)};
    const quitarLike=()=>{setLikes(likes-1)};
    const iniciarLike=()=>{setLikes(0)};
    return(
        <div>
            <h1>Likes: {likes}</h1>
            <button onClick={darLike}>Dar Like si te gusto</button>
            <button onClick={quitarLike}>Dar Dislike si no te gusto</button>
            <button onClick={iniciarLike}>Inicializar Like </button>
        </div>
    )
}