const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: 'title is required',
    minlength: 4,
    maxlength: 150,
  },
  description: {
    type: String,
    required: 'task information required',
    minlength: 5,
    maxlength: 200,
  },
  status: {
    type: String,
  },
});

module.exports = mongoose.model('Task', TaskSchema);
