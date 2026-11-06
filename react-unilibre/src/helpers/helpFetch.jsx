export const helpFetch = () =>{
    const URL = "https://upgraded-robot-4j45w4v9grjhqv5-3004.app.github.dev/"
    //Recibo en endpoint "equipos" y una opciones como parametros
    const customFetch = (endpoint,options = {})=>{
        //Defino metodo de acuerdo al options
        options.method = options.method || "GET"
        //Defino un encabezado
        options.headers = {"content-type":"aplication/json"} 
        //Preguntar si llega algo al body
        if(options.body){
            options.body = JSON.stringify(options.body)     
        }  
        console.log(options);

        return fetch(`${URL}${endpoint}`,options).then(Response =>{
          return Response.ok 
          ? Response.json() 
          : Promise.reject({
            error:true, 
            status:Response.status,
            statusText:Response.statusText
          })  
        }).catch(error=>error)//Controla errores si la peticion falla
    
        }
        // Segunda funcion con retorno explicito de arrow function
    //Recibo endpoint y se lo hago llegar a customFetch
    const get = (endpoint) => customFetch(endpoint)

    const post = (endpoint, options) =>{
        options.method = "POST"
        return customFetch(endpoint, options)
    }
    //Aqui se recibe un tercer parametro que es el id
    const put = (endpoint, options,id) =>{
        options.method = "PUT"
        return customFetch(`${endpoint}/${id}`, options)
    }
    //Funcion para borrar
    const del = (endpoint, id) =>{
        const options = {method: "DELETE"}
        return customFetch(`${endpoint}/${id}`, options)
    }

    return { get, post, put, del }
}
