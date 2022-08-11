const router = require('express').Router();
const { getTasks , createTask , getTaskById , editTask , deleteTask } = require('./../controllers/taskController');

router.get('/' , (req,res) => {
  res.send('Hello from task API');
})

router.route('/tasks')
  .get(getTasks)
  .post(createTask)

router.route('/tasks/:id')
  .get(getTaskById)
  .patch(editTask)
  .delete(deleteTask)

module.exports = router;