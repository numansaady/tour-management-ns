const dotenv = require('dotenv').config();
const colors = require('colors');
const port = process.env.PORT || 4000;
const app = require('./app');
const errorHandler = require('./middleware/errorHandler');
const dbConnect = require('./utils/dbConnect');

// Database Connection
dbConnect();

app.use(errorHandler)

app.listen(port, ()=> {
    console.log(`Server is listening the port ${port}`.red.bold)
})

// server error handler
// process.on("unhandledRejection", (error)=>{
//     console.log(error.name, error.message);
//     app.close(()=>{
//         process.exit(1);
//     })
// })
