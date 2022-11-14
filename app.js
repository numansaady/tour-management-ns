const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');


// middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/tours", toursRoute);
app.use("/tour", tourRoute);

// Default route
app.get('/', (req, res)=> {
    res.send('Route is working...!')
})


// 404 Not found
app.all('*', (req, res)=> {
    res.status(404).send({message : "Route not found....!"})
})


module.exports = app;