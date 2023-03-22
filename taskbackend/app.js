const express = require('express');
const taskRoute = require('./routers/taskRoute');

const app = express();
app.use(express.json());


// Application routes
app.use('/api/v1/', taskRoute)


module.exports = app;