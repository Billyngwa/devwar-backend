const model = require("../models/task");
const gettask = {
    getTasksById: async (req, res) => {
    try {
        console.log(`this is id `,req.params.id);
        const taskId = req.params.id;
        const foundTask = await model.findById(taskId);
        console.log(foundTask);
        if (!foundTask) {
             res.status(401).json({
                task: "task not found"
            })
        }
        return res.json({
            task: foundTask
        })
    } catch (error) {
        console.log(`${error.message}`)
        return res.status(500).json({
            message: error.message || "Error occured while retrieving task with id " + id
        })
    }


}
}
module.exports = gettask;