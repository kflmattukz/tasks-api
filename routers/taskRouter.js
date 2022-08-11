const router = require('express').Router();
const { getTasks , createTask , getTaskById } = require('./../controllers/taskController');

router.get('/' , (req,res) => {
  res.send('Hello from task API');
})

router.route('/tasks')
  .get(getTasks)
  .post(createTask)

router.route('/tasks/:id')
  .get(getTaskById)

module.exports = router;