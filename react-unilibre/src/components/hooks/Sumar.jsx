import {useRef,useState} from 'react';
import './Sumar.css';

export function Sumar(){
    const from = useRef(0)
    const [num1,setNum1]= useState('');
    const [num2,setNum2]= useState('');
    const [rta,setRta]= useState('0');
    //funciones para calcular la suma
    const calcularSuma=(e)=>{
        e.preventDefault(); 
        setRta(Number(num1)+Number(num2))
    };
    //Funcion limpiar cajas
    const limpiarCajas=()=>{setNum1('');setNum2('');setRta(0)};
    
    return(
        <div id="container">
            <from ref={from}>
                <h2>Sumar dos números</h2>
                <input type="number"
                       placeholder="Digite su número"
                       value={num1}
                       onChange={(e)=>setNum1(e.target.value)}
                       />  
                <input type="number"
                       placeholder="Digite su número"
                       value={num2}
                       onChange={(e)=>setNum2(e.target.value)}
                       />  
            <button className="btn btn-primary mt4 d-block mx-auto" 
                    onClick={calcularSuma}>Sumar
            </button>
            {/*Aqui coloco el resultado*/ }
            <h3>Resultado: {rta}</h3>
            <button className="btn btn-primary mt4 d-block mx-auto" 
                    type="reset"
                    onClick={limpiarCajas}>Limpiar
            </button> 
            </from>
        </div>
    )
}