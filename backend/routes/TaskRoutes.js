const express = require('express');
const TaskController = require('../controller/CardController');

const router = express.Router();

router.route('/tasks').post(TaskController.TaskInfo);
router.route('/getTasks').get(TaskController.listAllTasks);
router.route('/getTask/:id').put(TaskController.UpdateTask);

module.exports = router;
