const Task = require('./../models/Task');

exports.getTasks = async (req,res) => {
  const task = await Task.find();
  if (!task) return res.status(400).json({msg: 'Something went wrong, please try again later'});

  res.status(200).json(task);
}

exports.createTask = async (req,res) => {
  const newTask = await Task.create({ name: req.body.name });
  if(!newTask) return res.status(400).json({msg: 'create task failed, please try again later'});

  res.status(201).json(newTask);
}

exports.getTaskById = async (req,res) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({msg: "Task not found"});

  res.status(200).json(task);
}