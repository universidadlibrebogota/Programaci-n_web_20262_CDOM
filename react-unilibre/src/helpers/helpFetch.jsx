export const helpFetch = () =>{
    const URL = "https://upgraded-robot-4j45w4v9grjhqv5-3004.app.github.dev/equipos";
    //Recibo en endpoint "equipos" y una opciones como parametros
    const customFetch = (endpoint,option = {})=>{
        //Defino metodo de acuerdo al options
        options.method = options.method || "GET"
        //Defino un encabezado
        options.headers = {"content-type":"aplication/json"} 
        //Preguntar si llega algo al body
        if(options.body){
            options.body = JSON.stringify(options.body)     
        }  
        console.log(option);

        return fetch(`${URL}${endpoint}`,options).then(Response =>{
          return Response.ok 
          ? Response.json() 
          : Promise.reject({
            error:true, 
            status:Response.status,
            statusText:Response.statusText
          })  
        }).catch(error=>error)
    
        }
        //Funcion que retorna las funciones del CRUD
        const get = (endpoint) => customFetch(endpoint)
        return {get}
    } 
