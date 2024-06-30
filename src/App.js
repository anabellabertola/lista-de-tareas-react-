import './App.css';
import FreeCodeCampLogo from "./imagenes/freecodecamp-logo.png";

import ListaDeTareas from './componente/listaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-contenedor'>
        <img src={FreeCodeCampLogo} className='freecodecamp-logo' alt="Freecodecamp Logo"/>
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}


export default App;
