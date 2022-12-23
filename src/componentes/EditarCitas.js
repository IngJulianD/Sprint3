import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from'react-router-dom'

const URL = 'http://localhost:5000/api/citas/'

const ComponenteEditarCitas = () => {

    const [fecha, setFecha]=useState('');
    const [hora, setHora]=useState('');
    const [nombres, setNombres]=useState('');
    const [sitio, setSitio]=useState('');
    const Navigate = useNavigate();
    const {id} = useParams();

    // funcion actualizar

    const ActualizarCitas = async(g) => {

        g.preventDefault()
        await axios.put(`${URL}${id}`,
            {fecha:fecha, hora:hora, nombres:nombres, sitio:sitio})
        Navigate('/citas');

    }
        useEffect(() =>{
            getCitasById()   
       // eslint-disable-next-line  
    },[])
    

    const getCitasById = async () =>{
        const res = await axios.get (`${URL}${id}`)
        setFecha (res.data.fecha)
        setHora(res.data.hora)
        setNombres(res.data.nombres)
        setSitio(res.data.sitio)

    }
    return (

        <div>
            <h3> Modulo agregar citas </h3>
            <form onSubmit={ActualizarCitas}>
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

export default ComponenteEditarCitas;