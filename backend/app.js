const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const TaskInfoRoute = require('./routes/TaskRoutes');
const ListTasks = require('./routes/TaskRoutes');
const UpdateTask = require('./routes/TaskRoutes');

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api', TaskInfoRoute);
app.use('/api', ListTasks);
app.use('/api', UpdateTask);

module.exports = app;
