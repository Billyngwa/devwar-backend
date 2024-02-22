const taskModel = require("../models/task");
const taskFxn = {
    getAllTasks: (req, res) => {
        taskModel.find({})
            .then(task => {
                res.status(200).json(
                    {
                        status: true,
                        data: task
                    }
                );
            }).catch(error => {
                const err = "error loading tasks"
                res.status(500).json(
                    {
                        status: false,
                        data: err,
                        error:error.message
                    }
                );
            })
    },
    getTasksById: (req, res) => {
        const taskId = req.params.id;

        taskModel.findById(taskId)
            .then(foundTask => {
                if (!foundTask) {
                    return res.status(401).json({
                        task: "task not found"
                    })
                }
                res.json({
                    task: foundTask.taskName
                })
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Error occured while retrieving task with id " + id
                })
            })
    },

    deleteAllTasks: (req, res) => {
        taskModel.deleteMany({})
            .then(sample => {
                return res.sendStatus(sample.deletedCount)
            }).catch(err => {
                res.status(500).json({
                    message: err.message || "Error occured while retrieving task with id " + id
                })
            })
    },
    deleteTasksById: (req, res) => {
        const id = req.params.id
        taskModel.findByIdAndDelete(id)
            .then(sample => {
                return res.status(200).json({ message: `${sample.taskName} deleted with success` })
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Error occured while retrieving task with id " + id
                })
            })
    },
    updateTasks: async (req, res) => {
        let { taskName, description, tags, status } = req.body;
        try {
            if (!req.body) return res.json({ message: "invald payload" });
            const updatedTask = await taskModel.findByIdAndUpdate(
                { _id: req.params.id },
                {
                    $set: {
                        "taskName": taskName,
                        "description": description,
                        "tags": tags,
                        "status": status
                    }
                },
                { returnDocument: true }
            );
            res.json({
                message: "update successfull",
                data: updatedTask
            })
        } catch (error) {
            console.log(error.message);
        }
    },
    createTask: async (req, res) => {
        let { taskName, description, author, tags,} = req.body;
        try {
            if (!title || !description) return res.json({ message: "invald payload" });
            const createdTask = await taskModel.create(
                {
                    "taskName": taskName,
                    "description": description,
                    "tags": tags,
                    "author":author
                }
            );
            res.json({
                message: "Task created successfully",
                data: createdTask
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

module.exports = taskFxn;