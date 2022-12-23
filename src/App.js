
import './App.css';


import { BrowserRouter as Router } from 'react-router-dom';
import ComponenteRutas from './configuracion/Rutas'
import CompNavbar from './configuracion/Navbar';
import ComponenteFooter from './configuracion/Footer';


// importar componentes

//ComponenteEditarProductos from './componentes/EditarProductos';

//importar routers (libterias)
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
      <Router>
        <CompNavbar/>
        <ComponenteRutas/>
        <ComponenteFooter/>
      </Router>

    </div>
  );
}

export default App;
