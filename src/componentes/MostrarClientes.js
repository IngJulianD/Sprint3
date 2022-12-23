import axios from 'axios'
import {useState, useEffect } from 'react'
import {Link} from'react-router-dom'

const URL = 'http://localhost:5000/api/clientes/'

const ComponenteMostrarClientes = () => {

    const [ clientes, setClientes] = useState([]);
    useEffect(() =>{
        getClientes() 
    
},[])

//creamos la funcion para mostarr los proveedores

const getClientes = async () => {

    const res = await axios.get(URL);
    setClientes (res.data);
}

// funcion eliminar provvedores

const eliminarClientes = async (id) => {
    await axios.delete(`${URL}${id}`)
    getClientes();
}

return (
    <div className = 'container'>
        <div className='row'>
            <div className='col'>
                <Link to = '/clientes/agregar' className = 'd-felx align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'><i className="fa-sharp fa-solid fa-user-plus"></i></Link>
                <table className='table'>
                    <thead className='tableTheadBg'>
                        <tr>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Documento</th>
                            <th>Correo</th>
                            <th>Telefono</th>
                            <th>Direccion</th>
                            <th>Ciudad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((Clientes, index) => (
                            <tr key = {index}>
                                <td>{Clientes.nombres}</td>
                                <td>{Clientes.apellidos}</td>
                                <td>{Clientes.documento}</td>
                                <td>{Clientes.correo}</td>
                                <td>{Clientes.telefono}</td>
                                <td>{Clientes.direccion}</td>
                                <td>{Clientes.ciudad}</td>
                                <td>
                                    <Link to = {`/clientes/editar/${Clientes._id}`} className = 'd-felx align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'><i className="fa-sharp fa-solid fa-file-pen"></i></Link>
                                    <button onClick={()=>eliminarClientes(Clientes._id)} className = 'd-felx align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'><i className="fa-sharp fa-solid fa-trash"></i></button>
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
export default ComponenteMostrarClientes;

