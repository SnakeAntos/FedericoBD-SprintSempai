const task = require("../models/taskModel");

// Método para obtener todas las tareas
async function getAllTasks() {
  try {
    const tasks = await task.findAll({
      attributes: ["id_task", "title", "priority_id", "user_id", "completed"], //hay que especificar los atributos recordar
    });
    return tasks;
  } catch (error) {
    throw new Error("Error al obtener todas las tareas: " + error);
  }
}

//funcion para encontrar tarea por id
async function getTaskById(taskId) {
  try {
    const foundTask = await task.findByPk(taskId, {
      attributes: ["id_task", "title", "priority_id", "user_id", "completed"],
    });
    return foundTask;
  } catch (error) {
    throw new Error("Error al obtener la tarea por ID: " + error);
  }
}
// Método para crear una nueva tarea aahhhhh
async function createTask(taskData) {
  try {
    const createdTask = await task.create(taskData);
    return createdTask;
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error al crear la tarea", details: error.message });
  }
}

// Método para eliminar una tarea por su ID
async function deleteTask(taskId) {
  try {
    const deletedTask = await task.destroy({
      where: {
        id_task: taskId,
      },
    });
    return deletedTask;
  } catch (error) {
    throw new Error("Error al eliminar la tarea: " + error);
  }
}

//Updatear una tarea
async function updateTask(taskId, updatedData) {
  try {
    const foundTask = await task.findByPk(taskId);

    if (!foundTask) {
      throw new Error("La tarea no existe");
    }

    const updatedTask = await foundTask.update({
      title: updatedData.title,
      priority_id: updatedData.priority_id,
      user_id: updatedData.user_id,
      completed: updatedData.completed,
    });

    return updatedTask;
  } catch (error) {
    throw new Error("Error al actualizar la tarea: " + error);
  }
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  deleteTask,
  updateTask,
};
