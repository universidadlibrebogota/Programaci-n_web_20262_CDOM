import {useState,useEffect} from 'react'
import {CrudForm} from './CrudForm'
import {CrudTable} from './CrudTable'
import {helpFetch} from '../../helpers/helpFetch'
import './Crud.css'

export const CrudApp = ()=>{
    //Ejecuto el helper
    const API = helpFetch()
     //Variable de estado para el manejo de los datos en los equipos
     const[equipos,setEquipos] = useState([]);
     //Este useEffect sirve para llamar a la URL y escucha un arreglo vacio
     useEffect(()=>{
        API.get("equipos")
        .then((Response)=> Response.json())
        .then((data)=>{
        setEquipos(data);
        //preguntar por lo que viene en el Response
        if (!ReportingObserver.error)
            setEquipos(Response)
        },[])
        console.log(API)
    },)
    //Inserccion de datos parametros equipos
    const addEquipo = (equipo) =>{

    }
    return(
        <div>
            <h1>Crud Equipos de Futbol</h1>
            {/*Formulario para cargar datos*/}
            <CrudForm addEquipo={addEquipo}/>
            <CrudTable equipos={equipos}/>
        </div>
    )
}