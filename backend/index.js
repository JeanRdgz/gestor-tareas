const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { mongoURI } = require('./config');

const app = express();
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado a MongoDB');
}).catch(err => {
  console.error('Error al conectar a MongoDB:', err);
});

// Modelo de Tarea
const tareaSchema = new mongoose.Schema({
  texto: { type: String, required: true },
  completada: { type: Boolean, default: false }
});

const Tarea = mongoose.model('Tarea', tareaSchema);

app.get('/api/tareas', async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.json(tareas);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener tareas' });
  }
});

app.post('/api/tareas', async (req, res) => {
  const { texto } = req.body;
  if (!texto) return res.status(400).json({ error: 'Texto requerido' });
  try {
    const nuevaTarea = new Tarea({ texto });
    await nuevaTarea.save();
    res.status(201).json(nuevaTarea);
  } catch (err) {
    res.status(500).json({ error: 'Error al agregar tarea' });
  }
});

app.put('/api/tareas/:id', async (req, res) => {
  const { completada } = req.body;
  try {
    const tarea = await Tarea.findByIdAndUpdate(req.params.id, { completada }, { new: true });
    if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });
    res.json(tarea);
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar tarea' });
  }
});

app.delete('/api/tareas/:id', async (req, res) => {
  try {
    const tarea = await Tarea.findByIdAndDelete(req.params.id);
    if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar tarea' });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor backend en http://localhost:${PORT}`);
});