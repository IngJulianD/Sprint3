import axios from 'axios'
import {useState, useEffect } from 'react'
import {Link} from'react-router-dom'

const URL = 'http://localhost:5000/api/citas/'

const ComponenteMostrarCitas = () => {

    const [ citas, setCitas] = useState([]);
    useEffect(() =>{
        getCitas() 
    
},[])

//creamos la funcion para mostarr los proveedores

const getCitas = async () => {

    const res = await axios.get(URL);
    setCitas (res.data);
}

// funcion eliminar provvedores

const eliminarCitas = async (id) => {
    await axios.delete(`${URL}${id}`)
    getCitas();
}

return (
    <div className = 'container'>
        <div className='row'>
            <div className='col'>
                <Link to = '/citas/agregar' className = 'd-felx align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'><i className="fa-sharp fa-solid fa-user-plus"></i></Link>
                <table className='table'>
                    <thead className='tableTheadBg'>
                        <tr>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Nommbres</th>
                            <th>Sitio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {citas.map((Cita, index) => (
                            <tr key = {index}>
                                <td>{Cita.fecha}</td>
                                <td>{Cita.hora}</td>
                                <td>{Cita.nombres}</td>
                                <td>{Cita.sitio}</td>
                                <td>
                                    <Link to = {`/citas/editar/${Cita._id}`} className = 'd-felx align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'><i className="fa-sharp fa-solid fa-file-pen"></i></Link>
                                    <button onClick={()=>eliminarCitas(Cita._id)} className = 'd-felx align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'><i className="fa-sharp fa-solid fa-trash"></i></button>
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
export default ComponenteMostrarCitas;

