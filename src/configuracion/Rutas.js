

import ComponenteMostrarProveedores from '../componentes/MostrarProveedores';
import ComponenteAgregarProveedore from '../componentes/CrearProveedores';
import ComponenteEditarProveedore from '../componentes/EditarProveedores';

import ComponenteMostrarCitas from '../componentes/MostrarCitas';
import ComponenteAgregarCitas from '../componentes/CrearCitas';
import ComponenteEditarCitas from '../componentes/EditarCitas';

import ComponenteMostrarProductos from '../componentes/MostrarProductos';
import ComponenteAgregarProductos from '../componentes/CrearProductos';
import ComponenteEditarProductos from '../componentes/EditarProductos';

import ComponenteMostrarClientes from '../componentes/MostrarClientes';
import ComponenteAgregarClientes from '../componentes/CrearClientes';
import ComponenteEditarClientes from '../componentes/EditarClientes';


import ComponenteInicio from '../configuracion/Inicio'

//importar routers (libterias)
import {Route, Routes } from 'react-router-dom'

const ComponenteRutas = () => {
    return(

        <Routes>
        
        <Route path = '/Inicio' element = {<ComponenteInicio/>}></Route>


        <Route path='/proveedores' element = {<ComponenteMostrarProveedores/>}></Route>
        <Route path='/proveedores/agregar' element = {<ComponenteAgregarProveedore/>}></Route>
        <Route path='/proveedores/editar/:id' element = {<ComponenteEditarProveedore/>}></Route>

        <Route path='/citas' element = {<ComponenteMostrarCitas/>}></Route>
        <Route path='/citas/agregar' element = {<ComponenteAgregarCitas/>}></Route>
        <Route path='/citas/editar/:id' element = {<ComponenteEditarCitas/>}></Route>

        <Route path='/productos' element = {<ComponenteMostrarProductos/>}></Route>
        <Route path='/productos/agregar' element = {<ComponenteAgregarProductos/>}></Route>
        <Route path='/productos/editar/:id' element = {<ComponenteEditarProductos/>}></Route>

        <Route path='/clientes' element = {<ComponenteMostrarClientes/>}></Route>
        <Route path='/clientes/agregar' element = {<ComponenteAgregarClientes/>}></Route>
        <Route path='/clientes/editar/:id' element = {<ComponenteEditarClientes/>}></Route>



      </Routes>
    )


}

export default ComponenteRutas;