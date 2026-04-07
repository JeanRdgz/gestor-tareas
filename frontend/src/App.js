import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [tareas, setTareas] = useState([]);
  const [texto, setTexto] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/api/tareas')
      .then(res => res.json())
      .then(data => setTareas(data))
      .catch(err => console.error('Error fetching tareas:', err));
  }, []);

  const agregarTarea = async () => {
    if (!texto.trim()) return;
    try {
      const res = await fetch('http://localhost:4000/api/tareas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ texto })
      });
      const nuevaTarea = await res.json();
      setTareas(old => [...old, nuevaTarea]);
      setTexto('');
    } catch (err) {
      console.error('Error agregando tarea:', err);
    }
  };

  const cambiarEstado = async (id, completada) => {
    try {
      await fetch(`http://localhost:4000/api/tareas/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completada })
      });
      setTareas(old => old.map(t => t._id === id ? { ...t, completada } : t));
    } catch (err) {
      console.error('Error cambiando estado:', err);
    }
  };

  const eliminarTarea = async (id) => {
    try {
      await fetch(`http://localhost:4000/api/tareas/${id}`, { method: 'DELETE' });
      setTareas(old => old.filter(t => t._id !== id));
    } catch (err) {
      console.error('Error eliminando tarea:', err);
    }
  };

  return (
    <div className="App">
      <h1>Gestor de Tareas</h1>
      <div>
        <input
          type="text"
          value={texto}
          onChange={e => setTexto(e.target.value)}
          placeholder="Nueva tarea"
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>
      <ul>
        {tareas.map(t => (
          <li key={t._id} style={{ textDecoration: t.completada ? 'line-through' : 'none' }}>
            <label>
              <input
                type="checkbox"
                checked={t.completada}
                onChange={e => cambiarEstado(t._id, e.target.checked)}
              />
              {t.texto}
            </label>
            <button onClick={() => eliminarTarea(t._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;