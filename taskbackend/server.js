const dotenv = require('dotenv');
const mongoose = require('mongoose');
const server = require('./app');

dotenv.config({path: './config.env'});

// Database connection
const DBname = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);
mongoose.connect(DBname, {
    useNewUrlParser: true,
}).then(()=> console.log(`DB connection successful`));


// Server run
const PORT = process.env.POST || 5000
server.listen(PORT, (err)=>{
    if(err) console.log(err)
    else console.log(`Server running at port:: ${PORT}`)
})