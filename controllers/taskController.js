const Task = require('./../models/Task');

exports.getTasks = async (req,res) => {  
  try {
    const task = await Task.find();
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({msg: error})
  }
}

exports.createTask = async (req,res) => {
  try {
    const newTask = await Task.create({ name: req.body.name });  
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({msg: error}); 
  }
}

exports.getTaskById = async (req,res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.status(200).json(task);
  } catch (error) {
    res.status(404).json({msg: "Task not found"}); 
  }
}