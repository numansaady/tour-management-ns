const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect(process.env.MONGODB_LOCAL).then(()=>{
        console.log('Database is connected successfully'.yellow.bold);
    })
}

module.exports = dbConnect;