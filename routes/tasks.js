const express = require("express");
const taskrouter = express.Router();
const tasks = require("../controllers/tasks");

taskrouter.post("/",tasks.createTask); //Route to create a task
taskrouter.put("/update/:id",tasks.updateTasks); //Route to update a task by id
taskrouter.get("/alltasks",tasks.getAllTasks); //Route to get all tasks
taskrouter.delete("/deleteTask/:id",tasks.deleteTasksById); //Route to delete a particular task by id
module.exports = taskrouter;

