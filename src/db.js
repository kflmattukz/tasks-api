const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()
mongoose.connect(process.env.MONGO_URI, (err) => {
  if(err) {
    return console.log(err)
  }
  console.log('Database connect Success!')
})