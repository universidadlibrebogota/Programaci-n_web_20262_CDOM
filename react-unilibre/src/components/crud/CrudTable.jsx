
export const CrudTable = ({equipos,setEditData,deleteEquipo}) =>{
    return(
        <div>
            <h2>Equipos actuales</h2>
            <table border='1'>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Equipos</td>
                        <td>Pais</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        equipos.length == 0 ? <tr><td>NO hay equipos</td></tr>
                        : equipos.map((equipo,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{equipo.id}</td>
                                    <td>{equipo.equipo}</td>
                                    <td>{equipo.pais}</td>
                                    <td><button className="btn btn-success mx-2"
                                        onClick={()=> setEditData(equipo)}>
                                        Editar</button></td>
                                    <td><button className="btn btn-danger mx-2"
                                        onClick={()=>deleteEquipo(equipo.id)}>
                                        Eliminar</button></td>
                                 </tr>                                    
                                )
                            })
                        }
                </tbody>
            </table>
        </div>
    )
}
