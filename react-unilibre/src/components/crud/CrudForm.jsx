export const CrudForm = ()=>{
    return(
        <div>
            <form className="m-3">
                <label htmlFor="equipo">Equipo:</label>
                <input type="text" name="equipo" />

                <label htmlFor="pais">Pais:</label>
                <input type="text" name="pais" />

                <input type="submit" value="Agregar" className="btn btn-primary mx-2" />

                <input type="reset" value="Cancelar" className="btn btn-danger mx-2" />


            </form>
        </div>
    )
}
