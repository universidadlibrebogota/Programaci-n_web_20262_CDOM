import {useState,useEffect} from 'react'
import {CrudForm} from './CrudForm'
import {CrudTable} from './CrudTable'

export const CrudApp = ()=>{
     //Variable de estado para el manejo de los datos en los equipos
     const[equipos,setEquipos] = useState([]);
     //Este useEffect sirve para llamar a la URL y escucha un arreglo vacio
     useEffect(()=>{
        fetch("https://upgraded-robot-4j45w4v9grjhqv5-3004.app.github.dev/equipos")
        .then((Response)=> Response.json())
        .then((data)=>{
        console.log(data);
        setEquipos(data);
        })
     },[]);
    return(
        <div>
            <h1>Crud Equipos de futbol</h1>
            {/*Formulario para cargar datos*/}
            <CrudForm/>
            <CrudTable equipos={equipos}/>
        </div>
    )
}