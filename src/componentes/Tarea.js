import React from 'react';
import '../hojas-de-estilo/Tarea.css';


//componente para las tareas
function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div 
        className='tarea-texto'
        onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div 
        className='tarea-contenedor-iconos'
        onClick={() => eliminarTarea(id)}>
        <img 
          src={require('../imagenes/icon-delete.jpg')}
          className='tarea-icono' 
          alt='Borrar Tarea'/>
      </div>
    </div>
  );    
}

export default Tarea;