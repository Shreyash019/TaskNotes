const mongoose = require('mongoose');
const taskModel = require('../models/taskModel')

exports.getAllTasks = async (req, res)=>{
    
    const allTask = await taskModel.find()

    res.status(200).json({
        status: 'Success',
        Length: allTask.length,
        data: {
            allTask
        }
    })
}

exports.createSingleTask = async (req, res)=>{
    const {taskName, taskSummary} = req.body;
    const createdTask = await taskModel.create({
        taskName: taskName,
        taskSummary: taskSummary
    })
    
    res.status(201).json({
        status: 'Success',
        data: {
            createdTask
        }
    })
}


exports.getSingleTask = async (req, res)=>{
    const searchId = req.params.id
    const singleTask = await taskModel.findById({_id: searchId})

    res.status(200).json({
        status: 'Success',
        data: {
            singleTask
        }
    })
}


exports.updateSingleTask = async (req, res)=>{
    const searchId = req.params.id
    const updateTask = await taskModel.findByIdAndUpdate({_id: searchId}, req.body, {
        new : true,
        runValidators: true
    })

    res.status(200).json({
        status: 'Success',
        data: {
            updateTask
        }
    })
}


exports.deleteSingleTask = async (req, res)=>{
    const delId = req.params.id
    const delTask = await taskModel.findByIdAndDelete({_id: delId})

    res.status(200).json({
        status: 'Success',
        data: {
            delTask
        }
    })
}