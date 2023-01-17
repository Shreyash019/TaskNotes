const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const taskRoute = require('./routers/taskRoute');

const app = express();
dotenv.config({path: './config.env'});
app.use(express.json());


// Application routes
app.use('/api/v1/', taskRoute)



// Database connection
const DBname = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD)
mongoose.connect(DBname, {
    useNewUrlParser: true,
}).then(()=> console.log(`DB connection successful`));


// Server 
const PORT = process.env.POST || 5000
app.listen(PORT, (err)=>{
    if(err) console.log(err)
    else console.log(`Server running at port:: ${PORT}`)
})