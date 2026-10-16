import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Pagina1 } from '../pages/Pagina1';
import { Pagina2 } from '../pages/Pagina2';
import { Categorias } from '../pages/Categorias';
import { Contactos } from '../pages/Contactos';
import { PagNoVale } from '../pages/PagNoVale';
import { Nav } from '../Componets/Nav';

export function MyRoutes(){
    return(
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path='/' element={<Pagina1/>}></Route> 
                <Route path='/pagina2' element={<Pagina2 />} ></Route> 
                <Route path='/contactos' element={<Contactos />}> </Route> 
                <Route path='/categorias' element={<Categorias />}> </Route> 
                <Route path='*' element={<PagNoVale />}></Route>
                
            </Routes>
        </BrowserRouter>
    )
}