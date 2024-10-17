const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Configura el motor de plantillas
app.set('view engine', 'ejs');

// Define las rutas
app.get('/', (req, res) => {
  // Lógica para obtener datos de tu orquestador y renderizar la vista
  axios.get('http://your-orchestrator/api/nodes')
    .then(response => {
      res.render('index', { nodes: response.data });
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error al obtener los nodos');
    });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});