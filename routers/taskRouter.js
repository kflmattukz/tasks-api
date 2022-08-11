const router = require('express').Router();
const { getTasks , createTask , getTaskById , editTask , deleteTask , isTaskExist } = require('./../controllers/taskController');

router.param('id' , isTaskExist)

router.route('/tasks')
  .get(getTasks)
  .post(createTask)

router.route('/tasks/:id')
  .get(getTaskById)
  .patch(editTask)
  .delete(deleteTask)

module.exports = router;