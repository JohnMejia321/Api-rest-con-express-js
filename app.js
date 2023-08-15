const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Simulamos una lista de tareas
let tasks = [];

// Obtener todas las tareas
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Crear una nueva tarea
app.post('/tasks', (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.json(newTask);
});

// Actualizar una tarea existente
app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const updatedTask = req.body;

  tasks = tasks.map(task => (task.id === taskId ? updatedTask : task));

  res.json(updatedTask);
});

// Borrar una tarea
app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter(task => task.id !== taskId);
  res.json({ message: 'Tarea eliminada con éxito.' });
});

app.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
