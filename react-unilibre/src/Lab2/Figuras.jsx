import {useState} from 'react';
import './Figuras.css'
export function Figuras(){
    // Estados o hooks para los numeros, opcion y resultado
    const [base, setBase]= useState('');
    const [altura, setAltura]= useState('');
    const [rta, setRta]= useState(null);
    const [opcion, setOpcion]= useState('');
    // Funcion que realiza los calculos
    const calcular=(e)=>{
        e.preventDefault();
        const n1= parseFloat(base);
        const n2= parseFloat(altura);
        //Validamos si los numeros vienen vacios
        if (isNaN(n1) || !base || isNaN(n2) || !altura){
            setRta('Debo digitar los dos numeros');
            return;
        }
        let result;
        switch(opcion){
            case 'Cuadrilatero': if (n1==0 || n2==0){
                        result ='NO es una figura ya que eso seria un vector';
                        }else{
                            result = n1 * n2;
                        }
                        break;
            
            case 'Triangulo': if (n1==0 || n2==0){
                        result ='NO es una figura ya que eso seria un vector';
                        }else{
                            result = n1 *n2 / 2 ;
                        }
                        break;
            default:
                result='Debes seleccionar una figura'
                        
        }
        setRta(result);
    };
    return (
        <div style={{
            padding: '20px',
            maxWidth: '300px',
            margin: '0 auto',
            fontFamily: 'sans-serif'
        }}>
        <h2>Figuras con react</h2>
        <form onSubmit={calcular}
        style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
            }}>
            {/*Solicitar el primer numero*/}
            <input type="number" 
                placeholder="Digite el primer numero"
                value={base}
                onChange={(e)=>setBase(e.target.value)}
                />    
            <select value={opcion}
                    onChange={(e)=>setOpcion(e.target.value)}
            >
                <option value="">Seleccione una opcion</option>
                <option value="Cuadrilatero">Cuadrado y/o rectangulo</option>
                <option value="Triangulo">Triangulo</option>
                
            </select>
            {/*Solicitar el segundo numero*/}
            <input type="number" 
                placeholder="Digite el segundo numero"
                value={altura}
                onChange={(e)=>setAltura(e.target.value)}
                />    
            {/*Boton de accion*/}
            <button type="submit">Calcular</button>
            </form>
            {/* Mostrar el resultado */}
            {rta !== null && (<div style={{
                                        marginTop:'13px',
                                        fontWeight: 'bold',
                                            }}>Resultado: {rta}</div>)}
        </div>
    )
}