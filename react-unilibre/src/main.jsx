import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//NO se le coloco {} a usuario porque tenia en el jsx el default
import {CrudApp} from './components/crud/CrudApp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CrudApp />
  </StrictMode>,
)
