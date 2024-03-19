const express = require("express");
const router = express.Router();
const controls = require("../controllers/user");
const authChecker = require("../middlewares/authmiddleware");
const authentication = require("../controllers/auth");


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




module.exports = router;