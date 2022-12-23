import axios from 'axios'
import {useState} from 'react'
import {useNavigate} from'react-router-dom'

const URL = 'http://localhost:5000/api/citas/'

const ComponenteAgregarCitas = () => {
    const [fecha, setFecha]=useState('');
    const [hora, setHora]=useState('');
    const [nombres, setNombres]=useState('');
    const [sitio, setSitio]=useState('');
    const Navigate = useNavigate();

    //funcion guardar

    const GuardarCitas = async (g) =>{
        g.preventDefault()
        await axios.post(URL,{fecha:fecha, hora:hora, nombres:nombres, sitio:sitio})
        Navigate('/citas');
    }

    return (

        <div>
            <h3> Modulo agregar citas </h3>
            <form onSubmit={GuardarCitas}>
                <div className = 'mb -3'>
                    <label className = 'form-label'>Fecha</label>
                    <input value = {fecha} onChange={(g) => setFecha(g.target.value)}
                    type = 'text' className='form-control'/>
                    

                </div>
                <div className = 'mb -3'>
                    <label className = 'form-label'>Hora</label>
                    <input value = {hora} onChange={(g) => setHora(g.target.value)}
                    type = 'text' className='form-control'/>
                    

                </div>
                <div className = 'mb -3'>
                    <label className = 'form-label'>Nombres</label>
                    <input value = {nombres} onChange={(g) => setNombres(g.target.value)}
                    type = 'text' className='form-control'/>
                    

                </div>
                <div className = 'mb -3'>
                    <label className = 'form-label'>Sitio</label>
                    <input value = {sitio} onChange={(g) => setSitio(g.target.value)}
                    type = 'text' className='form-control'/>
                    

                </div>
                <button type = 'submit' className = 'btn btn-primary' ><i className="fa-solid fa-floppy-disk"></i></button>
            </form>
        </div>

    )

}
export default ComponenteAgregarCitas;
