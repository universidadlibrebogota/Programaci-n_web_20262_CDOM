import {useState} from 'react';
export function Calculadora(){
    // Estados o hooks para los numeros, signos y resultado
    const [num1, setNum1]= useState('');
    const [num2, setNum2]= useState('');
    const [rta, setRta]= useState(null);
    const [signo, setSigno]= useState('');
    // Funcion que realiza los calculos
    const calcular=(e)=>{
        e.preventDefault();
        const n1= parseFloat(num1);
        const n2= parseFloat(num2);
        //Validamos si los numeros vienen vacios
        if (isNaN(n1) || !num1 || isNaN(n2) || !num2){
            setRta('Debo digitar los dos numeros');
            return;
        }
        let result;
        switch(signo){
            case '+': result = n1 + n2;
                    break;
            case '-': result = n1 - n2;
                break;
            case '*': result = n1 * n2;
                    break;
            case '/': if (n2==0){
                        result ='NO se puede dividr por 0';
                        }else{
                            result = n1 / n2;
                        }
                        break;
            
            default: result = '0' ;
                        
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
        <h2>Calculadora con react</h2>
        <form onSubmit={calcular}
        style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
            }}>
            {/*Solicitar el primer numero*/}
            <input type="number" 
                placeholder="Digite el primer numero"
                value={num1}
                onChange={(e)=>setNum1(e.target.value)}
                />    
            <select value={signo}
                    onChange={(e)=>setSigno(e.target.value)}
            >
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            {/*Solicitar el segundo numero*/}
            <input type="number" 
                placeholder="Digite el segundo numero"
                value={num2}
                onChange={(e)=>setNum2(e.target.value)}
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