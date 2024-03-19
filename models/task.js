const mongoose = require("mongoose");
const schema = mongoose.Schema;

const task = new schema(
    {
        taskName: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            $ref:"Users"
        },
        tags: {
            type: Array,
            required: false
        },
        status:{
            type:String,
            default:"pending"
        }
    },
    {
        timestamps:true
    }
);

const taskModel = mongoose.model("Tasks",task);
module.exports = taskModel;