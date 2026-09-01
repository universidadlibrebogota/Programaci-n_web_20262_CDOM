import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//NO se le coloco {} a usuario porque tenia en el jsx el default
import Usuario  from './components/Usuario.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Usuario nombre="Cristian Orjuela" edad="21" direccion={{calle:"Avenida Rojas" , ciudad:"Bogota"}}/>
  </StrictMode>,
)
