import React from "react";
import logo4 from '../imagenes/logo4.jpg';
import lon from '../imagenes/lon.jpg';
import im1 from '../imagenes/im1.jpg';
import im2 from '../imagenes/im2.jpg';
import im3 from '../imagenes/im3.jpg';
import im4 from '../imagenes/im4.jpg';
import im5 from '../imagenes/im5.jpg';
import im6 from '../imagenes/im6.jpg';
import im7 from '../imagenes/im7.jpg';
import im8 from '../imagenes/im8.jpg';

import los from '../imagenes/los.jpg';


const ComponenteInicio = ()=>{

    return (
       <header className="App-header">
        
        <div className="text-center">
            <h1 className="d-felx align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">Bienvenido a Civil Engineering Company</h1>

        </div>
        <img src={logo4} className="App-logo"  alt="logo" />
        <div>
            <div className="d-felx align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">Civil Engineering Company se ha caracterizado en el desarrollo de sus proyectos por una gestión proactiva de relacionamiento permanente con los grupos de interés. Además, ha realizado una labor de sensibilización en los temas ambientales, de seguridad y salud en el trabajo.

Se destaca la gestión laboral superando los porcentajes de contratación de mano de obra local y el acompañamiento a las comunidades en el desarrollo de los proyectos, convirtiéndose en un aliado estratégico para sus clientes con el objetivo de asegurar sus operaciones y el cumplimiento de las actividades.


            </div>
        </div>
        <img src={los} className="App-logo" style = {{height: 50}}  alt="logo" />
        <img src={los} className="App-logo" style = {{height: 50}}  alt="logo" />
        <img src={lon} className="App-logo" alt="logo" />
        <img src={los} className="App-logo" style = {{height: 50}}  alt="logo" />
        <div className="text-center">
            <h3  className="d-felx align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">Misión</h3>
            <div className="d-felx align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">Desarrollar proyectos de ingeniería y construcción basados en principios empresariales de alta responsabilidad social con un capital humano calificado, que siempre busque la satisfacción de los clientes, el crecimiento económico y el mejoramiento de la sociedad.</div>
        </div>
        <img src={los} className="App-logo" style = {{height: 100}}  alt="logo" />
        <div className="text-center">
            <h3 className="d-felx align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">Visión</h3>
            <div className="d-felx align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">Consolidarnos como una empresa líder a nivel nacional en el sector de la ingeniería y la construcción con proyectos que cumplen con los tiempos establecidos, con alta calidad y con total respeto al medio ambiente, logrando así exportar nuestra experiencia a países latinoamericanos</div>
            
        </div>
        <img src={los} className="App-logo" style = {{height: 100}} alt="logo" />

        <div className="text-center">
        <div className="d-felx align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <section class="Portafolio">
            <div class="contenedor">
                <h2 class="titulo">Portafolio</h2>
                <div class="galeria-port">
                    <div class="imagen-port">
                    <img src={im1} className="App-logo" style = {{height: 100}} alt="logo" />
                        <div class="hover-galeria">
                        <img src={logo4} className="App-logo" style = {{height: 100}} alt="logo" />
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                    <div class="imagen-port">
                    <img src={im2} className="App-logo" style = {{height: 100}} alt="logo" />
                        <div class="hover-galeria">
                        <img src={logo4} className="App-logo" style = {{height: 100}} alt="logo" />
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                    <div class="imagen-port">
                    <img src={im3} className="App-logo" style = {{height: 100}} alt="logo" />
                        <div class="hover-galeria">
                        <img src={logo4} className="App-logo" style = {{height: 100}} alt="logo" />
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                    <div class="imagen-port">
                        <img src={im4} className="App-logo" style = {{height: 100}} alt="logo" />
                        <div class="hover-galeria">
                        <img src={logo4} className="App-logo" style = {{height: 100}} alt="logo" />
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                    <div class="imagen-port">
                    <img src={im5} className="App-logo" style = {{height: 100}} alt="logo" />
                        <div class="hover-galeria">
                        <img src={logo4} className="App-logo" style = {{height: 100}} alt="logo" />
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                    <div class="imagen-port">
                    <img src={im6} className="App-logo" style = {{height: 100}} alt="logo" />
                        <div class="hover-galeria">
                        <img src={logo4} className="App-logo" style = {{height: 100}} alt="logo" />
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                    <div class="imagen-port">
                    <img src={im7} className="App-logo" style = {{height: 100}} alt="logo" />
                        <div class="hover-galeria">
                        <img src={logo4} className="App-logo" style = {{height: 100}} alt="logo" />
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                    <div class="imagen-port">
                    <img src={im8} className="App-logo" style = {{height: 100}} alt="logo" />
                        <div class="hover-galeria">
                        <img src={logo4} className="App-logo" style = {{height: 100}} alt="logo" />
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>

        </div>
        

       </header>
       
        
    )


}

export default ComponenteInicio;