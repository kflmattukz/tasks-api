const express = require('express');
require('dotenv').config();
const app = express();
const connectDB = require('./db');
const taskRouter = require('../routers/taskRouter')
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/v1' , taskRouter);

// app.get('/' , (req,res) => {
//   res.send('Hello from express JS');
// })

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT , err => {
      if (err) {
        console.log(err);
      }
      console.log(`Listening to http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log(err)
  }
}

start();