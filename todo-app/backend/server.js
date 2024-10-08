const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS

// Define Task model
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  deadline: {
    type: Date,
    default: null
  },
  completed: {
    type: Boolean,
    default: false
  }
});
const Task = mongoose.model('Task', taskSchema);

// Routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Route to get all tasks
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks', error });
  }
});

// Route to create a new task
app.post('/api/tasks', async (req, res) => {
  const { title, description, deadline } = req.body;

  if (!title) {
    console.error('Validation error: Title is required');
    return res.status(400).json({ message: 'Title is required' });
  }

  try {
    const newTask = new Task({ title, description, deadline, completed: false });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ message: 'Error creating task', error });
  }
});



app.delete('/api/tasks/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});





app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
