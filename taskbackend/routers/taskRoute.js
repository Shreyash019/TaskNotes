const express = require('express')
const router = express.Router();
const taskController = require('../controllers/taskController');

router.route('/').get()
router.route('/task')
    .get(taskController.getAllTasks)
    .post(taskController.createSingleTask)

router.route('/task/:id')
    .get(taskController.getSingleTask)
    .patch(taskController.updateSingleTask)
    .delete(taskController.deleteSingleTask)

module.exports = router