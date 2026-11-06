import {useState,useEffect} from "react" 
import {CrudForm} from './CrudForm'
import {CrudTable} from './CrudTable'
import {helpFetch} from "./../../helpers/helpFetch.jsx"
import './Crud.css'

export const CrudApp = ()=>{
    //Ejecuto el helper
    const API = helpFetch()
     //Variable de estado para el manejo de los datos en los equipos
         //Hook para realizar la edicion de datos
    const[editData,setEditData] = useState(null);

     const[equipos,setEquipos] = useState([]);
     //Este useEffect sirve para llamar a la URL y escucha un arreglo vacio

     console.log(API);

     useEffect(()=>{
        API.get("equipos").then((Response)=>{
            //console.log(Response);
            //Si no tiene error se setea con lo que hay en Response sino no hace nada
            if(!Response.error) setEquipos(Response)            
        })
    },[])

    // Insersion de datos parametro equipo Mando la funcion a form que es hijo
    const addEquipo = (equipo) =>{
        //console.log(equipo);
        const options = {
            body: equipo
        }
        API.post("equipos",options).then(Response =>{
            //console.log(Response);
            if (!Response.error) setEquipos([...equipos, equipo])
        })
    }
    // Funcion para editar los datos. Map retorna arreglo Si id del el viene igual al del equipo
    //retorna el equipo 
    const editEquipo = (equipo) =>{
        //console.log(equipo);
        const options = {
            body: equipo
        }
        API.put("equipos",options,equipo.id).then(Response =>{
            //console.log(Response);
            //Si no hay error mapeo equipos por cada el si el equipo es igual al id coloca ese equipo o sino el elem
            if (!Response.error) {
                const newEquipos = equipos.map(el => el.id === equipo.id ? equipo : el)
                setEquipos(newEquipos);
                setEditData(null); 
            }
        })
    }
    //Funcion para eliminar un equipo
    const deleteEquipo = (id) =>{
        const isDelete = window.confirm(`¿Seguro que desea ELIMINAR el Registro con id=${id}?`)
        if (isDelete){
            API.del("equipos", id).then(Response =>{
                if (!Response.error){
                    const newEquipos = equipos.filter(el => el.id != id)
                    setEquipos(newEquipos);
                }
            })
        }
    }

    return(
        <div>
            <h2>Crud Equipos de Futbol</h2>
            {/*Formulario para cargar datos*/}
            <CrudForm addEquipo={addEquipo} editEquipo={editEquipo} editData={editData} />
            <CrudTable equipos={equipos} setEditData={setEditData} deleteEquipo={deleteEquipo} />

        </div>
    )
}