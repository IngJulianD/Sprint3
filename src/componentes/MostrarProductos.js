import axios from 'axios'
import {useState, useEffect } from 'react'
import {Link} from'react-router-dom'

const URL = 'http://localhost:5000/api/productos/'

const ComponenteMostrarProductos = () => {

    const [ productos, setProductos] = useState([]);
    useEffect(() =>{
        getProductos() 
    
},[])

//creamos la funcion para mostarr los proveedores

const getProductos = async () => {

    const res = await axios.get(URL);
    setProductos (res.data);
}

// funcion eliminar provvedores

const eliminarProductos = async (id) => {
    await axios.delete(`${URL}${id}`)
    getProductos();
}

return (
    <div className = 'container'>
        <div className='row'>
            <div className='col'>
                <Link to = '/productos/agregar' className = 'd-felx align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'><i className="fa-sharp fa-solid fa-user-plus"></i></Link>
                <table className='table'>
                    <thead className='tableTheadBg'>
                        <tr>
                            <th>Id del pedido</th>
                            <th>Nombre del cliente</th>
                            <th>Nombre del producto</th>
                            <th>Cantidad</th>
                            <th>Valor del producto</th>
                            <th>Valor total del pedido</th>
                            <th>Fecha del pedido</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map((Producto, index) => (
                            <tr key = {index}>
                                <td>{Producto.idPedido}</td>
                                <td>{Producto.NombreCliente}</td>
                                <td>{Producto.NombreProducto}</td>
                                <td>{Producto.cantidad}</td>
                                <td>{Producto.valorProducto}</td>
                                <td>{Producto.valorTotalPedido}</td>
                                <td>{Producto.fechaPedido}</td>
                                <td>
                                    <Link to = {`/productos/editar/${Producto._id}`} className = 'd-felx align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'><i className="fa-sharp fa-solid fa-file-pen"></i></Link>
                                    <button onClick={()=>eliminarProductos(Producto._id)} className = 'd-felx align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'><i className="fa-sharp fa-solid fa-trash"></i></button>
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
export default ComponenteMostrarProductos;

