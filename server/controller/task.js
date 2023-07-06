const express = require("express");
const router = express.Router();
let tasks = require("../router/tasks");
const sequelize = require("../services/database");
const taskService = require("../services/taskService");
const { RouterProvider } = require("react-router-dom");

router.get("/status", (req, res) => {
  sequelize
    .authenticate()
    .then(() => {
      res.send("Conexión exitosa a la base de datos.");
    })
    .catch((error) => {
      res.status(500).send("Error al conectar a la base de datos: " + error);
    });
});

//localhost:port/tasks
router.get("/", async (req, res) => {
  const task = await taskService.getAllTasks();
  res.send(task);
});

//get task por id
router.get("/:id", async (req, res) => {
  const taskId = req.params.id;
  const task = await taskService.getTaskById(taskId);
  res.send(task);
});

//post crear tarea nueva
router.post("/new_task", async (req, res) => {
  try {
    const { title, priority_id, user_id, completed } = req.body;
    // Validar los datos si es necesario
    const newTask = await taskService.createTask({
      title,
      priority_id,
      user_id,
      completed,
    });

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la tarea" });
  }
});

// Delete task por id
router.delete("/:id", async (req, res) => {
  const taskId = req.params.id;
  try {
    await taskService.deleteTask(taskId);
    res.status(204).send("tarea eliminada correctamente");
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la tarea" });
  }
});

//updatear una tarea (title)
router.put("/update/:id", async (req, res) => {
  const taskId = req.params.id;
  const updatedData = req.body;

  try {
    const updatedTask = await taskService.updateTask(taskId, updatedData);
    res.status(200).json(updatedTask);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al actualizar la tarea", details: error.message });
  }
});

//get//sin la base
router.get("/:id", (req, res) => {
  let task = tasks.filter((task) => {
    return task.id == req.params.id;
  });
  res.send(task);
});

//post//sin la base
router.post("/", (req, res) => {
  let { id, name, completed } = req.body;
  let task = { id, name, completed };
  tasks.push(task);
  res.send(tasks);
});

//put//sin la base
router.put("/:id", (req, res) => {
  let { name, completed } = req.body;
  let idx = tasks.findIndex((task) => {
    return task.id == req.params.id;
  });
  tasks[idx].name = name;
  tasks[idx].completed = completed;
  res.send(tasks);
});

//delete//sin la base
router.delete("/:id", (req, res) => {
  const taskId = req.params.id;
  const index = tasks.findIndex((task) => task.id === Number(taskId));

  if (index !== -1) {
    tasks.splice(index, 1);
    res.send(tasks);
  } else {
    res.status(404).send("no se pudo borrar la tarea");
  }
});

module.exports = router;
