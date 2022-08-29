const Task = require('./../models/Task');

exports.isTaskExist = async (req,res,next,val) => {
  try {
    const checkTask = await Task.findById(val);
    if (!checkTask) return res.status(404).json({msg: "Task not Found."})
    req.task = checkTask;
    next()
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong, please try again later." });
  }
}

exports.getTasks = async (req,res) => {  
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks.map(task => {
      const { _id,name,completed } = task;
      return {
        "id" : _id,
        name,
        completed
      }
    }));
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
    const {_id , name , completed} = task;
    
    res.status(200).json({
      "id" : _id,
      name,
      completed
    });

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