import { useEffect, useState } from "react";
export const CrudForm = ({addEquipo,editData,editEquipo})=>{
    //utilizo useEffect para cada cambio en editData y lo paso al formulario
    useEffect(()=>{
        if(editData != null){
            setFormData(editData);
        } else{
            setFormData({
                equipo:'',
                pais:'',
                id:null
            })
        }
    },[editData])

    //Variable de estado para manejar el formulario
    const[formData,setFormData] = useState({
        equipo:'',
        pais:'',
        id:null
    })    
    //Creo la funcion para el envio del boton    
    const handleSubmit = (e) =>{
        e.preventDefault(); //Evita que la pagina se recargue        
        //Verifico que las cajas no esten vacias
        if(formData.equipo != '' && formData.pais != ''){
            if(editData != null){
                //ejecuto la funcion edit equipo con lo que tenga formData
                editEquipo(formData)
            }else{
            formData.id = Date.now(); 
            addEquipo(formData)
            }
            setFormData({
                equipo:'',equipo:'',
                pais:'',
                id:null
            })
        } else{
            alert("Por favor agregue un Equipo y un País")
        }
    }
    //Funcion para controlar los cambios en la variable de estado cada vez que digito en las cajas
    //hago destructuring de la informacion para copiarla
    const handleChange = (e) =>{
        setFormData({
            ...formData,[e.target.name]: e.target.value
        })
    }
    return(
        <div>
            <form className="m-3" onSubmit={handleSubmit}>
                <label htmlFor="equipo">Equipo:</label>
                <input type="text" name="equipo" onChange={handleChange} value={formData.equipo}/>
                <label htmlFor="pais">Pais:</label>
                <input type="text" name="pais" onChange={handleChange} value={formData.pais}/>
                <input type="submit" value="Enviar" className="btn btn-primary mx-2" />
                <input type="reset" value="Cancelar" className="btn btn-danger mx-2" />
            </form>
        </div>
    )
}

