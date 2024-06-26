import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import '../hojas-de-estilo/ListaDeTareas.css';

// Componente principal para la lista de tareas
function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState('todas'); // Estado para el filtro

  // Función para agregar tareas
  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  // Función para eliminar tareas
  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  // Función para completar tareas
  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  // Función para obtener las tareas filtradas
  const obtenerTareasFiltradas = () => {
    if (filtro === 'completadas') {
      return tareas.filter(tarea => tarea.completada);
    } else if (filtro === 'pendientes') {
      return tareas.filter(tarea => !tarea.completada);
    } else {
      return tareas;
    }
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className='tareas-filtro'>
        <button onClick={() => setFiltro('todas')}>Todas</button>
        <button onClick={() => setFiltro('completadas')}>Completadas</button>
        <button onClick={() => setFiltro('pendientes')}>Pendientes</button>
      </div>
      <div className='tareas-lista-contenedor'>
        {
          obtenerTareasFiltradas().map((tarea) =>
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea} />
          )
        }
      </div>
    </>
  );
}

export default ListaDeTareas;
