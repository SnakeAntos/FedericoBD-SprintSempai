
//cargo las variables globales
require('dotenv').config();
//llamada al express
const express = require("express");

//controller que contiene las rutas y ejecuta la funcion express
const app = express();
const taskRouter = require("./controller/task");


// app.use(express.json()) le dice a express que vamos a estar usando json para la comunicaciÃ³n
app.use(express.json());

//establecemos el puerto
const port = process.env.APP_PORT

app.get("/", (req, res) => {
  res.send("Bienvenido a nuestra api de tareas");
});

app.use('/tasks', taskRouter)//localhost:{port}/task 


app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
