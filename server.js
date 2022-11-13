const dotenv = require('dotenv').config();
const colors = require('colors');
const port = process.env.PORT || 4000;
const app = require('./app');
const dbConnect = require('./utils/dbConnect');

// Database Connection
dbConnect();

app.listen(port, ()=> {
    console.log(`Server is listening the port ${port}`.red.bold)
})
