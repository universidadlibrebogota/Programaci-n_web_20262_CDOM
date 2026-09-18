import React, {useEffect, useState} from 'react'

export const ApiTienda=()=>{
    //Variables de estado
    const [productos,setProductos]=useState([]);
    //useEffect para llamar a la api
    useEffect(()=>{
        async function obtenerProductos() {
            const response= await fetch ('https://fakestoreapi.com/Products/?limit=10&offset=0');
            const data=await response.json();
            setProductos(data);
        }
        obtenerProductos();
    },[])
    return(
        <div>
            <h1>Productos de la tienda</h1>
            <ul>
                {
                    productos.map((product,index)=>{
                        return(
                            <div>
                                <li key={index}><strong>Nombre: </strong>{product.title}<br/><img src={product.image} width='200' height='200' />
                                                                <strong>Precio: </strong>{product.price}
                                 </li>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}