const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    taskName: {
        type: String,
        required: [true, 'Please enter a task']
    },
    completeStatus: {
        type: Boolean
    },
    taskSummary: {
        type: String,
        required: [true, 'Please provide task summary']
    }
})

const taskModel = mongoose.model('taskModel', taskSchema);

module.exports = taskModel;