const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a task name'],
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true, // timestamp that adds timestaps to the database
  }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
