const Task = require('../models/taskModel');

exports.TaskInfo = (req, res) => {
  const { task, description, status } = req.body;

  let newTask = new Task({
    task,
    description,
    status,
  });
  newTask.save(err => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.status(200).json({
      message: 'task created',
    });
  });
};

exports.listAllTasks = (req, res) => {
  Task.find({})
    .select('_id task description status')
    .exec((err, data) => {
      if (err) {
        return res.json({
          error: 'task do not exist',
        });
      }
      res.json(data);
    });
};

exports.UpdateTask = (req, res) => {
  const id = req.params.id;
  const { status } = req.body;
  console.log(status);
  Task.findOne({ _id: id }).exec((err, oldTask) => {
    if (err) {
      return res.json({
        error: 'task not found',
      });
    }
    oldTask.status = status;
    oldTask.save(err => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      res.status(200).json({
        message: 'task updated',
      });
    });
  });
};
