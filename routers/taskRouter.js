const router = require('express').Router();

router.get('/' , (req,res) => {
  res.send('Hello from task API');
})

module.exports = router