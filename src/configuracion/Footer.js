import React from "react";
import redes from '../imagenes/redes.jpg';

const ComponenteFooter = () =>{
    return (
        <div class="card text-center">
            <div class="card-header">
                contacto
            </div>
            <div class="card-body">
                <h5 class="card-title">direccion calle 113 #23-4</h5>
                <p class="card-text">correo: Contacto@civil.enginnering.com - telefono: 3232358189</p>
                <img src={redes} className="App-logo1" style = {{height: 100}} alt="logo" />
            </div>
            <div class="card-footer text-muted">
                lunes - viernes  
            </div>
        </div>
    )

}
export default ComponenteFooter;