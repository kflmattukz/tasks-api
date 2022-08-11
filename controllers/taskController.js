const Task = require('./../models/Task');

exports.isTaskExist = async (req,res,next,val) => {
  try {
    const checkTask = await Task.findById(val);
    req.task = checkTask;
    next()
  } catch (error) {
    res.status(500).json({ msg: "Task not found." });
  }
}

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
    console.log(task);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({msg: error}); 
  }
}

exports.editTask = async (req,res) => {
  const { name , completed } = req.body;
  try {
    const updateTask = await Task.findOneAndUpdate(req.params.id , { name, completed })
    res.status(200).json(updateTask);
  } catch (error) {
    res.status(500).json({msg: error})
  }
}

exports.deleteTask = async (req,res) => {
  try {
    const deleteTask = await Task.deleteOne({ _id: req.params.id });
    res.status(200).json(deleteTask);
  } catch (error) {
    res.status(500).json({msg: error})
  }
}