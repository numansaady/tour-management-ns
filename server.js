const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const colors = require('colors');
const port = process.env.PORT || 4000;
const app = require('./app')

// Database Connection
mongoose.connect(process.env.MONGODB_LOCAL).then(()=>{
    console.log('Database is connected successfully');
})

app.listen(port, ()=> {
    console.log(`Server is listening the port ${port}`)
})
