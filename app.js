const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authrouter = require("./routes/index");
const userroute = require("./routes/index");
const taskroute = require("./routes/tasks");
const taskrout = require("./routes/getTask");


dotenv.config();
 mongoose.connect(process.env.URL)
 .then(() => {
    console.log('connection successful');
}).catch((error) => {
    console.log('error occured');
    console.log('Error: ' + error);
})
const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/auth",authrouter);
app.use("/user",userroute);
app.use("/task",taskroute);
app.use("/getTask",taskrout);


app.get("/status", (req,res)=>{
    res.json({
        message:"up and running"
    })
});

app.listen(process.env.PORT,(req,res)=>{
    console.log(`app is running on port ${process.env.PORT}` );
});
