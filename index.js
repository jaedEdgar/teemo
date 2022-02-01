const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

const taskController = require('./controller/task.controller')

const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(
  '/api-docs',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);

app.get('/api/tasks', (req, res) => {
    taskController.get().then(data => res.json(data));
});

app.post('/api/task', (req, res) => {
    taskController.create(req.body.task).then(data => res.json(data));
});

app.put('/api/task', (req, res) => {
    taskController.update(req.body.task).then(data => res.json(data));
});

app.delete('/api/task/:id', (req, res) => {
    taskController.delete(req.params.id).then(data => res.json(data));
});

app.get('/', (req, res) => {
    res.send(`<h1>API Works !!!</h1>`)
});

app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})