import axios from 'axios'
import {useState, useEffect } from 'react'
import {Link} from'react-router-dom'

const URL = 'http://localhost:5000/api/proveedores/'

const ComponenteMostrarProveedores = () => {

    const [ proveedores, setProveedor] = useState([]);
    useEffect(() =>{
        getProveedores() 
    
},[])

//creamos la funcion para mostarr los proveedores

const getProveedores = async () => {

    const res = await axios.get(URL);
    setProveedor (res.data);
}

// funcion eliminar provvedores

const eliminarProveedores = async (id) => {
    await axios.delete(`${URL}${id}`)
    getProveedores();
}

return (
    <div className = 'container'>
        <div className='row'>
            <div className='col'>
                <Link to = '/proveedores/agregar' className = 'd-felx align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'><i className="fa-sharp fa-solid fa-user-plus"></i></Link>
                <table className='table'>
                    <thead className='tableTheadBg'>
                        <tr>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Documento</th>
                            <th>Correo</th>
                            <th>Telefono</th>
                            <th>Direccion</th>
                            <th>Empresa</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {proveedores.map((Proveedore, index) => (
                            <tr key = {index}>
                                <td>{Proveedore.nombres}</td>
                                <td>{Proveedore.apellidos}</td>
                                <td>{Proveedore.documento}</td>
                                <td>{Proveedore.correo}</td>
                                <td>{Proveedore.telefono}</td>
                                <td>{Proveedore.direccion}</td>
                                <td>{Proveedore.empresa}</td>
                                <td>
                                    <Link to = {`/proveedores/editar/${Proveedore._id}`} className = 'd-felx align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'><i className="fa-sharp fa-solid fa-file-pen"></i></Link>
                                    <button onClick={()=>eliminarProveedores(Proveedore._id)} className = 'd-felx align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'><i className="fa-sharp fa-solid fa-trash"></i></button>
                                </td>
                            </tr>

                        ))}
                    </tbody>             
                </table>
            </div>
        </div>
    </div>






    )

}
export default ComponenteMostrarProveedores;

