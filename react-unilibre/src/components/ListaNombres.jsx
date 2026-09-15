import { useState } from "react";
export const ListaNombres =()=>{
    //Variables de estado para los nombres
    const [nombre,setNombre]= useState('');
    const[nombres,setNombres]= useState([]);
    //Funcion para guardar 
    const guardar=()=>{
        setNombres([...nombres,nombre]);
        setNombres('');
    }
    return(
        <div>
            <p> Ingrese un Nombre:</p>
            <input type="text" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}/>
            <button onClick={guardar}>Enviar</button>
            <ul>
                {
                    nombres.map((elemento,index)=>{
                        return(
                        <li key={index}>{elemento}</li>);
                    })
                }
            </ul>
        </div>
    )
}