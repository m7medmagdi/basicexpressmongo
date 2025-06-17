
const express = require('express')
const router = express.Router()
const Task = require('../models/schema')

router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks', details: err.message });
  }
});

router.post('/tasks', async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json({ message: 'Task created successfully', task });
  } catch (err) {
    res.status(400).json({ error: 'Failed to create task', details: err.message });
  }
});


const mongoose = require('mongoose'); // at top if not already

router.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid Task ID format' });
  }

  try {
    const updatedTask = await Task.findByIdAndUpdate(id, data, { new: true, runValidators: true });

    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(200).json({ message: 'Task updated successfully', task: updatedTask });
  } catch (err) {
    res.status(400).json({ error: 'Failed to update task', details: err.message });
  }
});


router.delete('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Check if a task with this ID exists
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(200).json({ message: 'Task deleted successfully', task: deletedTask });
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID format or internal error', details: err.message });
  }
});


module.exports = router;