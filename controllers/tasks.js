const taskModel = require("../models/task");
const taskFxn = {
    getAllTasks: (req, res) => {
        console.log(req.url);
        taskModel.find()
            .then(task => {
                res.status(200).json(
                    {
                        status: true,
                        data: task
                    }
                );
            }).catch(error => {
                console.log(error.message)
                const err = "error loading tasks"
                res.status(500).json(
                    {
                        status: false,
                        data: err,
                        error: error.message
                    }
                );
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
        console.log("id; ", id);
        taskModel.findByIdAndDelete(id)
            .then(sample => {
                return res.status(200).json({ message: `${sample.taskName} deleted with success` })
            }).catch(err => {
                res.status(500).json({
                    message: "Error occured while deleting task with id " + id
                })
            })
    },
  
    updateTasks: async (req, res) => {
        try {
        const { taskName, description, tags, status } = req.body.data;

            console.log("body",req.body);
            console.log("body:",{ taskName, description, tags, status })
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
                // { returnDocument: true }
            );
        return    res.json({
                message: "update successfull",
                data: updatedTask
            })
        } catch (error) {
            console.log(error.message);
        }
    },
    createTask: async (req, res) => {
        let { taskName, description, author, tags,status } = req.body.data;
        try {
            if (!taskName || !description) return res.json({ message: "invald payload" });
            const createdTask = await taskModel.create(
                { taskName, description, author, tags,status }
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