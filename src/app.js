const express = require('express');
const app = express();
const taskRouter = require('../routers/taskRouter')
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/v1' , taskRouter);
app.get('/' , (req,res) => {
  res.send('Hello from express JS');
})

app.listen(PORT , (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Listening to http://localhost:${PORT}`);
});