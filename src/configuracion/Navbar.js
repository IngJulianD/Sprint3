import React from "react"
import lg from '../imagenes/lg.jpg';
import los from '../imagenes/los.jpg';

const CompNavbar = () => {

    return (
        <div>
            <header className="App-header">
            <img src={los} className="App-logo" style = {{height: 100}} alt="logo" />
      
          <img src={lg} className="App-logo" alt="logo" />

          <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container px-4 px-lg-5">
            <img src = "https://i.pinimg.com/550x/1e/80/15/1e80152e82f5878594319b08a096bb31.jpg" style = {{height: 100}} alt = 'logo'/>
                <a className="navbar-brand" href="/proveedores">App Web</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    
                </div>
                </button>
                <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a class="nav-link" href="/inicio">Inicio</a></li>
                        <li className="nav-item"><a class="nav-link" href="/proveedores">Proveedores</a></li>
                        <li className="nav-item"><a class="nav-link" href="/productos">Productos</a></li>
                        <li className="nav-item"><a class="nav-link" href="/citas">Citas</a></li>
                        <li className="nav-item"><a class="nav-link" href="/clientes">Clientes</a></li>
                        
                    </ul>
                
            </div>
        </nav>
        
      </header>
        </div>
    )
}

export default CompNavbar;