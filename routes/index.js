const express = require("express");
const router = express.Router();
const controls = require("../controllers/user");
const authChecker = require("../middlewares/authmiddleware");
const authentication = require("../controllers/auth");
const tasks = require("../controllers/tasks");


router.get("/",controls.getAllUsers); //Route to get all users from taskManagement

router.get("/:id",controls.getUserById); //Route to get a user by his id 

router.delete("/",controls.deleteAllUsers); // Route to delete all user from taskMangement

router.delete("/:id",controls.deleteUserById); // Route to delete a particular user

router.post("/signup",authentication.register); // Route to register users in taskManagement

router.post("/forgot-password",authentication.forgotPassword); // Route for forgot password

router.post("/forgot-password/reset",authentication.resetToken); // Route to reset password

router.post("/signin", authChecker.checkUser, authentication.signIn); //Route to sign in user

/*
 ******************************************************* End of user Routes ******************************
*/

router.get("/",tasks.getAllTasks); //Route to get all tasks

router.get("/:id",tasks.deleteTasksById); //Route to get particular tasks

router.patch("/:id",tasks.updateTasks); //Route to update a task by id

router.post("/",tasks.createTask); //Route to create a task

router.delete("/task/:id",tasks.deleteTasksById); //Route to delete a particular task by id


module.exports = router;