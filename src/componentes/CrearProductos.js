import axios from 'axios'
import {useState} from 'react'
import {useNavigate} from'react-router-dom'

const URL = 'http://localhost:5000/api/productos/'

const ComponenteAgregarProductos = () => {
    const [idPedido, setIdPedido]=useState('');
    const [NombreCliente, setnombreCliente]=useState('');
    const [NombreProducto, setnombreProducto]=useState('');
    const [cantidad, setCantidad]=useState('');
    const [valorProducto, setValorProducto]=useState('');
    const [valorTotalPedido, setValorTotalPedido]=useState('');
    const [fechaPedido, setFechaPedido]=useState('');
    const Navigate = useNavigate();

    //funcion guardar

    const GuardarProductos = async (g) =>{
        g.preventDefault()
        await axios.post(URL,{idPedido:idPedido, NombreCliente:NombreCliente, NombreProducto:NombreProducto, 
            cantidad:cantidad, valorProducto:valorProducto, valorTotalPedido:valorTotalPedido,fechaPedido:fechaPedido})
        Navigate('/productos');
    }

    return (

        <div>
            <h3> Modulo agregar productos </h3>
            <form onSubmit={GuardarProductos}>
                <div className = 'mb -3'>
                    <label className = 'form-label'>Id del pedido</label>
                    <input value = {idPedido} onChange={(g) => setIdPedido(g.target.value)}
                    type = 'text' className='form-control'/>
                    

                </div>
                <div className = 'mb -3'>
                    <label className = 'form-label'>Nombre del cliente</label>
                    <input value = {NombreCliente} onChange={(g) => setnombreCliente(g.target.value)}
                    type = 'text' className='form-control'/>
                    

                </div>
                <div className = 'mb -3'>
                    <label className = 'form-label'>Nombre del producto</label>
                    <input value = {NombreProducto} onChange={(g) => setnombreProducto(g.target.value)}
                    type = 'text' className='form-control'/>
                    

                </div>
                <div className = 'mb -3'>
                    <label className = 'form-label'>Cantidad</label>
                    <input value = {cantidad} onChange={(g) => setCantidad(g.target.value)}
                    type = 'text' className='form-control'/>
                    

                </div>
                <div className = 'mb -3'>
                    <label className = 'form-label'>Valor del producto</label>
                    <input value = {valorProducto} onChange={(g) => setValorProducto(g.target.value)}
                    type = 'number' className='form-control'/>
                    

                </div>
                <div className = 'mb -3'>
                    <label className = 'form-label'>Valor total del pedido</label>
                    <input value = {valorTotalPedido} onChange={(g) => setValorTotalPedido(g.target.value)}
                    type = 'number' className='form-control'/>
                    

                </div>
                <div className = 'mb -3'>
                    <label className = 'form-label'>Fecha del pedido</label>
                    <input value = {fechaPedido} onChange={(g) => setFechaPedido(g.target.value)}
                    type = 'text' className='form-control'/>
                    

                </div>
                <button type = 'submit' className = 'btn btn-primary' ><i className="fa-solid fa-floppy-disk"></i></button>
            </form>
        </div>

    )

}
export default ComponenteAgregarProductos;
