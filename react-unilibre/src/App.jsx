import './App.css'

//vamos a crear un componente
function Person(props){
  return(
    <div className="person" style={{backgroundColor:props.color}}>
      <h3>Nombre: {props.nombre}</h3>
      <p>Edad: {props.edad}</p>
      <p>Salario: {props.salario}</p>
    </div>
  )
}
export default function App() {
  return (
    <div className="App">
      <h1>Hola Mundo</h1>
      {/*Vamos a añadir un componente*/}
      <Person nombre="Cristian" edad="22" salario="50.000.000" color="#abc440"/>
      <Person nombre="Santiago" edad="23" salario="23.000.000" color="black"/>
      <Person nombre="Brandon" edad="23" salario="25.000.000" color="orange"/>
    </div>
    );
}
