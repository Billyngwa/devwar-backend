const express = require("express");
const router = express.Router();
const gettask = require("../controllers/getTask");

router.get(`/details/:id`,gettask.getTasksById); //Route to get particular tasks
module.exports = router;
